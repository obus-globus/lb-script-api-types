import type { Parser } from '../../../../io/jsonwebtoken/io/Parser.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class AbstractParser<T extends Object | number | string | boolean> extends Object implements Parser<T> {
    constructor()
    parse(arg0: InputStream): T;
    parse(arg0: CharSequence): T;
    parse(arg0: CharSequence, arg1: number, arg2: number): T;
}