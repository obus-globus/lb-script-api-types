import type { Object } from '../../../java/lang/Object.d.ts'
import type { PayloadEmit } from '../../../org/ahocorasick/trie/PayloadEmit.d.ts'
export abstract class PayloadToken<T extends unknown> extends Object {
    constructor(arg0: string)
    readonly fragment: string;
    getEmit(): PayloadEmit<T>;
    getFragment(): string;
    isMatch(): boolean;
}