# Type 'string[]' is not assignable to type 'string'
This example demonstrates a common TypeScript error that occurs when trying to pass an array to a function expecting a single string. The error message will be:  `Type 'string[]' is not assignable to type 'string'.`

## Bug
The `greeter` function is defined to accept a single string argument.  However, the `user` variable is an array of strings. Passing `user` to `greeter` results in a type error because the types are incompatible.

## Solution
The solution depends on the intended behavior.  If you want to greet each person in the array, you need to iterate over the array and call the `greeter` function for each person.  If you only need to greet one specific person, you will need to select the appropriate string from the array before passing it to the `greeter` function.