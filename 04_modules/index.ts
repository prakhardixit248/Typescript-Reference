import { numbers }  from './01_numbers';
import { strings } from './02_strings';
import booleanApi  from './03_boolean';
import objectLiteralApi from './04_object-literals';
import { arrays } from './05_arrays';
// import { callback, createTodo, sum } from './06_functions';
import * as functionsApi from './06_functions';
import { heading, separator  } from '../util';

heading('numbers');
numbers();
separator();

heading('strings');
strings();
separator();

heading('booleans')
booleanApi();
separator();

heading('object literal');
objectLiteralApi();
separator();

heading('arrays');
arrays();
separator();

heading('functions');
console.log('sum(10, 20) = ', functionsApi.sum(10, 20));
console.log('callback("hello", {data: "world"}): ', functionsApi.callback('hello', { data: 'world'}));
console.log('functionsApi.createTodo(): ', functionsApi.createTodo());
separator();
