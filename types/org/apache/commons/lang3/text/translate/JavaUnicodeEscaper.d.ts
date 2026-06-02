import type { UnicodeEscaper } from '../../../../../../org/apache/commons/lang3/text/translate/UnicodeEscaper.d.ts'
export class JavaUnicodeEscaper extends UnicodeEscaper {
    static above(paramarg0: number): JavaUnicodeEscaper;
    static above(paramarg0: number): UnicodeEscaper;
    static below(paramarg0: number): JavaUnicodeEscaper;
    static below(paramarg0: number): UnicodeEscaper;
    static between(paramarg0: number, paramarg1: number): JavaUnicodeEscaper;
    static between(paramarg0: number, paramarg1: number): UnicodeEscaper;
    static hex(paramarg0: number): string;
    static outsideOf(paramarg0: number, paramarg1: number): JavaUnicodeEscaper;
    static outsideOf(paramarg0: number, paramarg1: number): UnicodeEscaper;
    constructor(arg0: number, arg1: number, arg2: boolean)
    toUtf16Escape(arg0: number): string;
}