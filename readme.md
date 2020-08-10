TypeScript Programming

1. The ES 6 based programming language
2. TypeScript Features
   1. The block scope using 'let' keyword, ES 6
3. Data Types, only in TypeScript
   1. number, for all numeric types
   2. string
   3. boolean
   4. date
   5. Object
   6. any (default type)
   7. Union Types
      1. declaration of variable with more than one data type
4. The 'rest' parameters ES 6
   1. Mechanism to pass variable number of parameters to a method
   2. syntax
      1. ...arg
         1. ... is knows as 'spead-operator'
5. Template String, ES 6
   1. New sysntax for string concatination aka mechanism to build a 'mutable-string'
   2. HTML Parsing for string
   3. syntax
      1. `${Expressions}`
         1. `My name is ${myname}`
            1. Here myname is variable
6. Arrow Operator, ES 6
   1. Lambda Expressions like C#
   2. If a method accepts callback function as input parameter then use arraow operation as input parameter instaed of callback function
   3. Syntax
      1. function myfx(function(x,y){......})
      2. myfx((x,y)=> {......});
7. Collection methods for Array and String
8. Object Oriented Programming, ES 6
9. Modules, ES 6
10. Transpilations--> Compilation and then Transformation aka Compiled Transformation
    1. TypeScript will be transpiled into JavaScript (ES 3)

======================================================================================
Installing JavaScript

1. Install it in Global Scope of Machine
   1. npm install -g typescript
2. The 'tsc' utility aka CLI, used to transpile the .ts files into .js javascript files
3. CReate package.json file, the JavaScript package configuartion file generated using
   1. npm init -y ----------------> command
4. The 'devDependencies' for development time packages
   1. npm install --save-dev <PACKAGE-NAME>
5. The 'dependencies' for runtime required packages
   1. npm install --save <PACKAGE-NAME>

======================================================================================
