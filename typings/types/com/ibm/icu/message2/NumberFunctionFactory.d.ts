import type { Function } from '../../../../com/ibm/icu/message2/Function.d.ts'
import type { FunctionFactory } from '../../../../com/ibm/icu/message2/FunctionFactory.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NumberFunctionFactory extends Object implements FunctionFactory {
    constructor(arg0: string)
    // private kind: string;
    create(arg0: Locale, arg1: { [key: string]: Object }): Function;
}