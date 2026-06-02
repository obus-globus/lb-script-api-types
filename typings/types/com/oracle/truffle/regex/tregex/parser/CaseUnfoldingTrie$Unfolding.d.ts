import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CaseUnfoldingTrie$Unfolding extends Object {
    constructor(start: number, length: number, codepoint: number)
    readonly codepoint: number;
    readonly length: number;
    readonly start: number;
    getCodepoint(): number;
    getEnd(): number;
    getLength(): number;
    getStart(): number;
}