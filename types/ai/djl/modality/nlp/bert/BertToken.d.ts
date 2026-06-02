import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BertToken extends Object {
    constructor(arg0: string[], arg1: number[], arg2: number[], arg3: number)
    readonly attentionMask: number[];
    // private tokenType: number[];
    readonly tokens: string[];
    readonly validLength: number;
    getAttentionMask(): number[];
    getTokenTypes(): number[];
    getTokens(): string[];
    getValidLength(): number;
}