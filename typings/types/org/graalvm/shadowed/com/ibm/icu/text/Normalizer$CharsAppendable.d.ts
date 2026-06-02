import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class Normalizer$CharsAppendable extends Object implements Appendable {
    constructor(dest: string[], destStart: number, destLimit: number)
    // private chars: string[];
    // private limit: number;
    // private offset: number;
    // private start: number;
    append(c: string): Appendable;
    append(s: CharSequence): Appendable;
    append(s: CharSequence, sStart: number, sLimit: number): Appendable;
    length(): number;
}