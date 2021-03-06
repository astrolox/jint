/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.16/15.4.4.16-2-17.js
 * @description Array.prototype.every applied to the Arguments object, which implements its own property get method
 */


function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var func = function (a, b) {
            arguments[2] = 9;
            return Array.prototype.every.call(arguments, callbackfn1) &&
                !Array.prototype.every.call(arguments, callbackfn2);
        };

        return func(12, 11);
    }
runTestCase(testcase);
