This repository contains examples and practice problems covering essential JavaScript concepts that form the foundation for advanced JavaScript development, including frameworks like React.
Core Concepts Covered

1. Execution Context & Call Stack
The execution context is the environment in which JavaScript code runs, while the call stack tracks the execution contexts as functions are called and completed.

2. Hoisting, Scope, and Block vs Function Scope

Hoisting: JavaScript's behavior of moving declarations to the top of their scope
Function Scope: Variables declared with var are accessible throughout the function
Block Scope: Variables declared with let and const are only accessible within the block they are defined

3. Variable Declarations: let, const, var

var: Function-scoped, can be redeclared, hoisted (initialized as undefined)
let: Block-scoped, can't be redeclared, can be reassigned, hoisted (but not initialized)
const: Block-scoped, can't be redeclared, can't be reassigned, hoisted (but not initialized)

4. Closures
A closure occurs when a function remembers and accesses variables from its outer scope, even after the outer function has finished execution.
