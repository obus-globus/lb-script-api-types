import type { Object } from '../../../java/lang/Object.d.ts'
import type { OpResolver } from '../../../kroppeb/stareval/parser/OpResolver.d.ts'
import type { StringReader } from '../../../kroppeb/stareval/parser/StringReader.d.ts'
export class OpResolver$SingleChar<T extends Object | number | string | boolean> extends OpResolver<T> {
    constructor(arg0: T)
    // private op: T;
    resolve(arg0: StringReader): T;
}