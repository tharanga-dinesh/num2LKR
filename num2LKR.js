/**
@summary     num2LKR
@description A jQuery plugin to convert numbers or amount to Sri Lanka Rupees
@version     1.0.0
@file num2LKR.js
@author tharanga-dinesh(dinesh1official@gmail.com)

[Original base code & idea by Faizal Mansor (osh@okijana.com) [http://okijana.com] (thanks!)]
num2LKR v0.1
Release Date: 
MIT License
Copyright (c) 2017 Tharanga Dinesh
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

 (function($){
    $.fn.extend({
        num2LKR : function(options){
            var defaults = {
                units:["", "එක", "දෙක", "තුන", "හතර", "පහ", "හය", "හත", "අට", "නමය"],
                teens:["එකොළහ", "දොළහ", "දහතුන", "දාහතර", "පහළොව", "දහසය", "දාහත", "දහඅට", "දහනමය"],
                tens:["දහය", "විස්ස", "තිහ", "හතලිය", "පනහ", "හැට", "හැත්තෑව", "අසූව", "අනූව"],
                hundreds:[ "එකසිය", "දෙසිය", "තුන්සිය", "හාරසිය", "පන්සිය", "හයසිය", "හත්සිය", "අටසිය", "නමසිය"],
            };
            var options = $.extend(defaults, options);

            function numbersToLKRWord (){
                var o = options;
                var units = o.units;
                var teens = o.teens;
                var tens = o.teens;
                var hundreds = o.hundreds;

                var belowTen = function(n){
                    if(n < 10){
                        return units[n];
                    }
                };

                var belowHundred = function(n){

                };

                var belowThousand = function(n){

                }; 

            }

            return this.each(function(){
                $(this).val('dummy text');
            });   
        }
    });
 }(jQuery))