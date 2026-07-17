import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function$Argument } from '../../../../team/unnamed/mocha/runtime/value/Function$Argument.d.ts'
import type { Function$Arguments } from '../../../../team/unnamed/mocha/runtime/value/Function$Arguments.d.ts'
export class ExpressionInterpreter$FunctionArguments extends Object implements Function$Arguments {
    static EMPTY: Function$Arguments;
    constructor(arg0: Function$Argument[])
    // private arguments: Function$Argument[];
    // private next: number;
    length(): number;
    next(): Function$Argument;
}