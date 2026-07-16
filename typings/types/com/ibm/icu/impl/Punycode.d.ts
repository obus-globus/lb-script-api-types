import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Punycode extends Object {
    static decode(paramarg0: CharSequence, paramarg1: boolean[]): StringBuilder;
    static encode(paramarg0: CharSequence, paramarg1: boolean[]): StringBuilder;
    constructor()
}