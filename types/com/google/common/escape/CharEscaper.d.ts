import type { Escaper } from '../../../../com/google/common/escape/Escaper.d.ts'
export abstract class CharEscaper extends Escaper {
    constructor()
    escape(c: string): string[];
    escape(string: string): string;
    escapeSlow(s: string, index: number): string;
}