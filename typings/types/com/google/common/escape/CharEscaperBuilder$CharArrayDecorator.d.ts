import type { CharEscaper } from '../../../../com/google/common/escape/CharEscaper.d.ts'
export class CharEscaperBuilder$CharArrayDecorator extends CharEscaper {
    constructor(replacements: string[][])
    // private replaceLength: number;
    // private replacements: string[][];
    escape(c: string): string[];
    escape(s: string): string;
}