import type { Emit } from '../../../org/ahocorasick/trie/Emit.d.ts'
import type { PayloadToken } from '../../../org/ahocorasick/trie/PayloadToken.d.ts'
import type { Token } from '../../../org/ahocorasick/trie/Token.d.ts'
export class DefaultToken extends Token {
    constructor(arg0: PayloadToken<string>)
    // private payloadToken: PayloadToken<string>;
    getEmit(): Emit;
    isMatch(): boolean;
}