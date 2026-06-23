import type { Object } from '../../../java/lang/Object.d.ts'
import type { OpResolver } from '../../../kroppeb/stareval/parser/OpResolver.d.ts'
import type { StringReader } from '../../../kroppeb/stareval/parser/StringReader.d.ts'
export class OpResolver$SingleDualChar<T extends unknown> extends OpResolver<T> {
    constructor(arg0: T, arg1: T, arg2: string)
    // private doubleCharOperator: T;
    // private secondChar: string;
    // private singleCharOperator: T;
    resolve(arg0: StringReader): T;
}