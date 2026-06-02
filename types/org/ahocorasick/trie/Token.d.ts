import type { Object } from '../../../java/lang/Object.d.ts'
import type { Emit } from '../../../org/ahocorasick/trie/Emit.d.ts'
export abstract class Token extends Object {
    constructor(arg0: string)
    readonly fragment: string;
    getEmit(): Emit;
    getFragment(): string;
    isMatch(): boolean;
}