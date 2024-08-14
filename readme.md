# TYPE SCRIPT GUIDE FOR BEGINNERS

#### how to intialize TypeScript in your local repository
```
npm i typescript 
```

### how to intialize Globally
````bash
npm i -g  typescript
````
Output
````bash
added 1 package, and audited 2 packages in 2s
found 0 vulnerabilities
````
To configure TypeScript in your project, you need a tsconfig.json file. This JSON file allows you to customize the TypeScript compiler options, including settings like the output directory and files to exclude. Below is an example of a basic tsconfig.json configuration that includes these settings:

```json
I recommend excluding the output folder in your tsconfig.json file to prevent redeclaration errors
{
  "compilerOptions": {
  }, "exclude": [
    "node_modules",                         
    "output",                               
  ]
}

```
[Learn more about `tsconfig.json` here.](https://www.typescriptlang.org/tsconfig)


Running the TypeScript Compiler
```bash
npx tsc
```
<hr></hr>

## Type Assignment

When creating a variable, there are two main ways TypeScript assigns a type:

- Explicit
- Implicit

* EXPLCIT DECLARATION
```typescript
let userName: string = "Karnan;
```
* IMPLICIT DECLARATION
````typescript
let firstName = "Dylan";
````
In implicit declaration TypeScript will AutoMatically infer(guess) its dataType


# TypeScript Special Types

TypeScript includes special types that may not refer to any specific type of data:

## Type: `any`

Disables type checking, allowing all types.

### Without `any`

```typescript
let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
```

## Type: `unknown`

Similar to `any`, but safer by preventing operations without type checks.{type checking will be there}

### Usage of `unknown`

```typescript
let w: unknown = 1;
w = "string"; // No error

```
## Type: `never`

Indicates a value that will never occur.

```typescript
let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
```

# TypeScript Arrays

## Type: `array`

```typescript
let x: number[] = []; element inside the array will be number 
let x: string[] = []; element inside the array will be string
let x: (number|string) = [] either number or string (union | or )
```
## Type: `Tuples`
A special type of array where the types of elements are predefined and ordered. **Note:** The order of the data types within a tuple should not be changed.

### Example of a Tuple

```typescript
let x: [number, string] = [5, "Karnan"];
```

# TypeScript Objects

### Inline Type Definition

In TypeScript, you can define the type of an object inline. This approach is useful for simple, one-off object types.

```typescript
const userDetails: { name: string, model?: string, year: number } = {
  name: "karnan",
  year: 2009
};
```
### Using an Interface

Interfaces are a powerful way to define complex object types and can be reused across multiple objects. Here’s how you can define and use an interface for the same type of object:

```typescript
interface UserDetails {
  name: string;
  model?: string; "here model is option and can be skipped"
  dob: number;
}

const userDetails: UserDetails = {
  name: "Toyota",
  dob: 2009
};
```
## TypeScript Enums

An `enum` is a special "class" representing a group of constants.

### Numeric Enums - Initialized

You can set a starting value for numeric enums and they auto-increment from there:

```typescript
enum Status {
  Pending = 1,
  InProgress,
  Completed
}

let taskStatus = Status.Pending;
console.log(taskStatus); // Logs: 1
```
## TypeScript Type Aliases

Type Aliases allow you to define types with a custom name, making your code more readable and maintainable. They can be used for both simple and complex types.

### Simple Type Alias

You can create a type alias for a primitive type like `string`:

```typescript
type Username = string;
let user: Username = "Alice";
```
## TypeScript Type Aliases

### Object Type Alias

Define a type alias for an object:

```typescript
type User = {
  name: string;
  age: number;
};

// if we declare like this we will get autocompleate suggestion 
let userDetails: User = {
  name: "Bob",  
  age: 30
};
```
# TypeScript Functions

TypeScript has specific syntax for typing function parameters and return values.

## Return Type

The type of the value returned by the function can be explicitly defined. If not defined, TypeScript will infer the type based on the returned expressions.

### Example

```typescript
// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}
```
# TypeScript Functions

TypeScript has a specific syntax for typing function parameters and return values. Below are different aspects of function typing in TypeScript.

## Void Return Type

The `void` type is used to indicate a function that doesn't return any value.

### Example

```typescript
function printHello(): void {
  console.log('Hello!');
}
```
## Parameters

Function parameters are typed with a syntax similar to variable declarations. If no parameter type is defined, TypeScript defaults to `any`.

### Example

```typescript
function multiply(a: number, b: number): number {
  return a * b;
}
```
## Named Parameters {similar to destructuring}


Typing named parameters follows the same pattern as typing normal parameters.

### Example

```typescript
function divide({ dividend, divisor }: { dividend: number, divisor: number }): number {
  return dividend / divisor;
}
```
## Rest Parameters

Rest parameters are always arrays and can be typed like normal parameters.

### Example

```typescript
function add(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
```
# TypeScript Casting

There are times when it's necessary to override the type of a variable, especially when incorrect types are provided by a library.

## Casting with `as`

A straightforward way to cast a variable is using the `as` keyword, which changes the type of the given variable.

### Example

```typescript
let x: unknown = 'hello';
console.log((x as string).length);
```
### Important Note

Casting doesn't actually change the type of the data within the variable. For example:

```typescript
let x: unknown = 4;
console.log((x as string).length); // Prints undefined since numbers don't have a length
```









