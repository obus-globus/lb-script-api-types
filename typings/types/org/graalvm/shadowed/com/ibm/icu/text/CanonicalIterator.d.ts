import type { StringBuffer } from '../../../../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Normalizer2Impl } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Normalizer2Impl.d.ts'
import type { Normalizer2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Normalizer2.d.ts'
export class CanonicalIterator extends Object {
    static permute(paramsource: string, paramskipZeros: boolean, paramoutput: string[]): void;
    constructor(source: string)
    // private buffer: StringBuilder;
    // private current: number[];
    // private done: boolean;
    // private nfcImpl: Normalizer2Impl;
    // private nfd: Normalizer2;
    // private pieces: string[][];
    readonly source: string;
    // private extract(comp: number, segment: string, segmentPos: number, buf: StringBuffer): string[];
    // private getEquivalents(segment: string): string[];
    // private getEquivalents2(segment: string): string[];
    getSource(): string;
    next(): string;
    reset(): void;
    setSource(newSource: string): void;
}