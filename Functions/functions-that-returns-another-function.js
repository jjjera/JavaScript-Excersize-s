var greet = function ( person , greeting ) {
    var text = greeting + ’, ’ + person ;
    return function () { console . log ( text ); };
    };
    var greeting = greet ( ’ Rebecca ’ , ’ Hello ’);
    greeting ();