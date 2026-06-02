import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class Punycode extends Object {
    static decode(paramsrc: CharSequence, paramcaseFlags: (Object | null)[]): StringBuilder;
    static encode(paramsrc: CharSequence, paramcaseFlags: (Object | null)[]): StringBuilder;
    constructor()
}