import type { Normalizer2Impl } from '../../../../com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { Normalizer2 } from '../../../../com/ibm/icu/text/Normalizer2.d.ts'
import type { StringBuffer } from '../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CanonicalIterator extends Object {
    static permute(paramarg0: string, paramarg1: boolean, paramarg2: string[]): void;
    constructor(arg0: string)
    // private buffer: StringBuilder;
    // private current: number[];
    // private done: boolean;
    // private nfcImpl: Normalizer2Impl;
    // private nfd: Normalizer2;
    // private pieces: string[][];
    readonly source: string;
    // private extract(arg0: number, arg1: string, arg2: number, arg3: StringBuffer): string[];
    // private getEquivalents(arg0: string): string[];
    // private getEquivalents2(arg0: string): string[];
    getSource(): string;
    next(): string;
    reset(): void;
    setSource(arg0: string): void;
}