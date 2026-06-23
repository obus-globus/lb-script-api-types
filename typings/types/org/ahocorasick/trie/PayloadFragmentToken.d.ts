import type { Object } from '../../../java/lang/Object.d.ts'
import type { PayloadEmit } from '../../../org/ahocorasick/trie/PayloadEmit.d.ts'
import type { PayloadToken } from '../../../org/ahocorasick/trie/PayloadToken.d.ts'
export class PayloadFragmentToken<T extends unknown> extends PayloadToken<T> {
    constructor(arg0: string)
    getEmit(): PayloadEmit<T>;
    isMatch(): boolean;
}