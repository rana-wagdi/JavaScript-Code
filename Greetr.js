(function(global, $) {
    
    var Greetr = function(firstName,lastName,language){
        return new Greetr.init(firstName,lastName,language);
    }

    var supportedLangs=['en','es'];

   var greetings = {
        en:'Hello',
        es:'Hola'
    };

   var formalGreetings={
        en:'Greetings',
        es:'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es:'Incio seasion'
    };



    Greetr.prototype={
        fullName:function(){
            return this.firstName+' '+this.lastName;

        },
        validate:function(){
           if (supportedLangs.indexOf(this.language) === -1){
             throw "Invalid Language";
            }
        },

        greeting: function(){
            return greetings[this.language]+' '+this.firstName+'!';

        },
        formalGreeting:function(){
            return formalGreetings[this.language]+', '+this.firstName();
        },
        greet: function(formal) {
            var msg ;

            //if undefined or null it well be coerced to 'false'
            if (formal){
                msg=this.formalGreeting();
            }
            else{
                msg = this.greeting()
            }

            if(console){
                console.log(msg);
            }
            return this;
        }
    };

    Greetr.init = function(firstName,lastName,language){

        var self = this;
        self.firstName= firstName || '';
        self.lastName = lastName || '';
        self.language= language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ =Greetr;

    
}(window, jQuery));