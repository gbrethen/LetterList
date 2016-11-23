'use strict'

const Letter = use('App/Model/Letter');

class LetterController {
    * index (request, response) {
        const letters = yield Letter.all();
        yield response.sendView('home', { letters: letters.toJSON() });
    }
    
    * delete (request, response) {
        const letters = yield Letter.find(request.param('id'));
        yield letters.delete();
        
        response.redirect('/');
    }
    
    * create (request, response) {
        yield response.sendView('createLetter');
    }
    
    * store (request, response) {
        const postData = request.only('letterName', 'letterComments');
        
        const rules = {
            letterName: 'required',
            letterComments: 'required'
        }
        
        const validation = yield Validator.validate(postData, rules);
        
        if (validation.fails()) {
            yield request
                .withOnly('title', 'content')
                .andWith({ errors: validation.messages() })
                .flash()
            
            response.redirect('back');
            return;
        }
        
        yield Letter.create(postData);
        response.redirect('/');
    }
}

module.exports = LetterController
