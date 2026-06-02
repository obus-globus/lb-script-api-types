import type { Emit } from '../../../org/ahocorasick/trie/Emit.d.ts'
import type { Token } from '../../../org/ahocorasick/trie/Token.d.ts'
export class FragmentToken extends Token {
    constructor(arg0: string)
    getEmit(): Emit;
    isMatch(): boolean;
}