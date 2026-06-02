import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NameAbbreviator$PatternAbbreviatorFragment extends Object {
    constructor(charCount: number, ellipsis: string)
    // private charCount: number;
    // private ellipsis: string;
    abbreviate(input: string, inputIndex: number, buf: StringBuilder): number;
    toString(): string;
}