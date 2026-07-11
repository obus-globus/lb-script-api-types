import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
import type { CharSequenceTranslator } from '../../../../../../org/apache/commons/lang3/text/translate/CharSequenceTranslator.d.ts'
import type { NumericEntityUnescaper$OPTION } from '../../../../../../org/apache/commons/lang3/text/translate/NumericEntityUnescaper$OPTION.d.ts'
export class NumericEntityUnescaper extends CharSequenceTranslator {
    static hex(paramarg0: number): string;
    constructor(...arg0: NumericEntityUnescaper$OPTION[])
    // private options: NumericEntityUnescaper$OPTION[];
    isSet(arg0: NumericEntityUnescaper$OPTION): boolean;
    translate(arg0: CharSequence): string;
    translate(arg0: CharSequence, arg1: Writer): void;
    translate(arg0: CharSequence, arg1: number, arg2: Writer): number;
}