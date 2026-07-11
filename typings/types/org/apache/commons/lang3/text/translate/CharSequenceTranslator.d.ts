import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
export abstract class CharSequenceTranslator extends Object {
    static hex(paramarg0: number): string;
    constructor()
    translate(arg0: CharSequence): string;
    translate(arg0: CharSequence, arg1: Writer): void;
    translate(arg0: CharSequence, arg1: number, arg2: Writer): number;
    with(...arg0: CharSequenceTranslator[]): CharSequenceTranslator;
}