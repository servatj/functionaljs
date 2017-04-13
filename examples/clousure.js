// A closure is a persistent scope which holds on to local variables even after 
// the code execution has moved out of that block. 
// Languages which support closure (such as JavaScript, Swift and Ruby) 
// will allow you to keep a reference to a scope (including its parent scopes), 
// even after the block in which those variables were declared has finished executing, 
// provided you keep a reference to that block or function somewhere.

var name = 'Hristo Stoickov'
function sayHi(){
	console.log('Hi ' + name)
}
sayHi() // hi Hristo Stoickov

// every time we call the function it access to the current value of the variable name 
// This gives us function portability. We can expect any variables that were in scope
// when the function was first defined to still be in scope when we later call the
// function, even if we call the function in a completely different context

var name = 'Zamorano'
sayHi()

// you can find more a about closures in http://stackoverflow.com/questions/36636/what-is-a-closure
outer = function() {
  var a = 1;
  var inner = function() {
    console.log(a);
  }
  return inner; // this returns a function
}

var fnc = outer(); // execute outer to get inner 
fnc();
