import type { Object } from '../../../java/lang/Object.d.ts'
import type { OpResolver } from '../../../kroppeb/stareval/parser/OpResolver.d.ts'
import type { StringReader } from '../../../kroppeb/stareval/parser/StringReader.d.ts'
export class OpResolver$DualChar<T extends Object | number | string | boolean> extends OpResolver<T> {
    constructor(arg0: T, arg1: string)
    // private op: T;
    // private secondChar: string;
    resolve(arg0: StringReader): T;
}