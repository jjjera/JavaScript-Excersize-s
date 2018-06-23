var myFn = function ( fn ) {
    var result = fn ();
    console . log ( result );
    };
    myFn ( function () { return ’ hello world ’; });