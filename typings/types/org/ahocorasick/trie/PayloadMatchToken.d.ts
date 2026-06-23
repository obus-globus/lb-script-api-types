import type { Object } from '../../../java/lang/Object.d.ts'
import type { PayloadEmit } from '../../../org/ahocorasick/trie/PayloadEmit.d.ts'
import type { PayloadToken } from '../../../org/ahocorasick/trie/PayloadToken.d.ts'
export class PayloadMatchToken<T extends unknown> extends PayloadToken<T> {
    constructor(arg0: string, arg1: PayloadEmit<T>)
    readonly emit: PayloadEmit<T>;
    getEmit(): PayloadEmit<T>;
    isMatch(): boolean;
}