import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { CharSequenceTranslator } from '../../../../org/apache/commons/lang3/text/translate/CharSequenceTranslator.d.ts'
export class StringEscapeUtils$CsvUnescaper extends CharSequenceTranslator {
    static hex(paramarg0: number): string;
    private constructor()
    translate(arg0: CharSequence): string;
    translate(arg0: CharSequence, arg1: Writer): void;
    translate(arg0: CharSequence, arg1: number, arg2: Writer): number;
}