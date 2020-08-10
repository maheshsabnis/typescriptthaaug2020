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
   1. Array, is defined using [];
   2. Array<T>, the generic array type
8. Object Oriented Programming, ES 6
9. Modules, ES 6
10. Transpilations--> Compilation and then Transformation aka Compiled Transformation
    1. TypeScript will be transpiled into JavaScript (ES 3)

======================================================================================
Installing JavaScript

1. Install it in Global Scope of Machine
   1. npm install -g typescript
2. The 'tsc' utility aka CLI, used to transpile the .ts files into .js javascript files
3. To run the JavaScript
   1. Either create HTML page and refer JavaScript on HTML Page and execute in browser
   2. OR run the JavaScript file on Node.js server
      1. node <File>.js
4. CReate package.json file, the JavaScript package configuartion file generated using
   1. npm init -y ----------------> command
5. The 'devDependencies' for development time packages
   1. npm install --save-dev <PACKAGE-NAME>
6. The 'dependencies' for runtime required packages
   1. npm install --save <PACKAGE-NAME>

======================================================================================
Ex 1: Create string with following value
TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.

1.  Convert the string into statement case. First character of first word of each statement must be upper case. (immedate)
2.  Find out the number of occurences of specific word and character in string.
3.  COnvert first character of each word in upper case.
