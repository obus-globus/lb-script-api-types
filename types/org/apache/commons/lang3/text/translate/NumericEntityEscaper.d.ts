import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { CodePointTranslator } from '../../../../../../org/apache/commons/lang3/text/translate/CodePointTranslator.d.ts'
export class NumericEntityEscaper extends CodePointTranslator {
    static above(paramarg0: number): NumericEntityEscaper;
    static below(paramarg0: number): NumericEntityEscaper;
    static between(paramarg0: number, paramarg1: number): NumericEntityEscaper;
    static hex(paramarg0: number): string;
    static outsideOf(paramarg0: number, paramarg1: number): NumericEntityEscaper;
    constructor()
    private constructor(arg0: number, arg1: number, arg2: boolean)
    // private above: number;
    // private below: number;
    // private between: boolean;
    translate(arg0: number, arg1: Writer): boolean;
}