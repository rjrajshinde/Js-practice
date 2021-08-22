
//it just repeatedly calls foo() method in infinity loop and it fulls the stack so it gives the error
function foo() {
    return foo();
}
foo()
