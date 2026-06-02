import type { Emit } from '../../../org/ahocorasick/trie/Emit.d.ts'
import type { Token } from '../../../org/ahocorasick/trie/Token.d.ts'
export class MatchToken extends Token {
    constructor(arg0: string, arg1: Emit)
    readonly emit: Emit;
    getEmit(): Emit;
    isMatch(): boolean;
}