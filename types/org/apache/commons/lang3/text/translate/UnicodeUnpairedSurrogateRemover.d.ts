import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { CodePointTranslator } from '../../../../../../org/apache/commons/lang3/text/translate/CodePointTranslator.d.ts'
export class UnicodeUnpairedSurrogateRemover extends CodePointTranslator {
    static hex(paramarg0: number): string;
    constructor()
    translate(arg0: number, arg1: Writer): boolean;
}