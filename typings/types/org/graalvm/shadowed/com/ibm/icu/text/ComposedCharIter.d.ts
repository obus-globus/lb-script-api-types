import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Normalizer2Impl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl.d.ts'
export class ComposedCharIter extends Object {
    static DONE: string;
    constructor()
    constructor(compat: boolean, options: number)
    // private curChar: number;
    // private decompBuf: string;
    // private n2impl: Normalizer2Impl;
    // private nextChar: number;
    decomposition(): string;
    // private findNextChar(): void;
    hasNext(): boolean;
    next(): string;
}