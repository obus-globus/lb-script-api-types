import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
import type { CodePointTranslator } from '../../../../../../org/apache/commons/lang3/text/translate/CodePointTranslator.d.ts'
export class UnicodeUnpairedSurrogateRemover extends CodePointTranslator {
    static hex(paramarg0: number): string;
    constructor()
    translate(arg0: CharSequence): string;
    translate(arg0: CharSequence, arg1: Writer): void;
    translate(arg0: CharSequence, arg1: number, arg2: Writer): number;
    translate(arg0: number, arg1: Writer): boolean;
}