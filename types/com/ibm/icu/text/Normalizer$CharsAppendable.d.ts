import type { Appendable } from '../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Normalizer$CharsAppendable extends Object implements Appendable {
    constructor(arg0: string[], arg1: number, arg2: number)
    // private chars: string[];
    // private limit: number;
    // private offset: number;
    // private start: number;
    append(arg0: string): Appendable;
    append(arg0: CharSequence): Appendable;
    append(arg0: CharSequence, arg1: number, arg2: number): Appendable;
    length(): number;
}