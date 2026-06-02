import type { Escaper } from '../../../../com/google/common/escape/Escaper.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class UnicodeEscaper extends Escaper {
    constructor()
    escape(cp: number): string[];
    escape(string: string): string;
    escapeSlow(s: string, index: number): string;
    nextEscapeIndex(csq: CharSequence, start: number, end: number): number;
}