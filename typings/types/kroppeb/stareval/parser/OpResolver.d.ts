import type { Object } from '../../../java/lang/Object.d.ts'
import type { StringReader } from '../../../kroppeb/stareval/parser/StringReader.d.ts'
export abstract class OpResolver<T extends Object | number | string | boolean> extends Object {
    constructor()
    resolve(arg0: StringReader): T;
}