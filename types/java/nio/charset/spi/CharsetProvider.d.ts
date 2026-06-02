import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class CharsetProvider extends Object {
    constructor()
    charsetForName(arg0: string): Charset;
    charsets(): Iterator<Charset>;
}