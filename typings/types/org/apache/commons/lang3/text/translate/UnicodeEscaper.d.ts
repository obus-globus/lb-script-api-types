import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
import type { CodePointTranslator } from '../../../../../../org/apache/commons/lang3/text/translate/CodePointTranslator.d.ts'
export class UnicodeEscaper extends CodePointTranslator {
    static above(paramarg0: number): UnicodeEscaper;
    static below(paramarg0: number): UnicodeEscaper;
    static between(paramarg0: number, paramarg1: number): UnicodeEscaper;
    static hex(paramarg0: number): string;
    static outsideOf(paramarg0: number, paramarg1: number): UnicodeEscaper;
    constructor()
    constructor(arg0: number, arg1: number, arg2: boolean)
    // private above: number;
    // private below: number;
    // private between: boolean;
    toUtf16Escape(arg0: number): string;
    translate(arg0: CharSequence): string;
    translate(arg0: CharSequence, arg1: Writer): void;
    translate(arg0: CharSequence, arg1: number, arg2: Writer): number;
    translate(arg0: number, arg1: Writer): boolean;
}