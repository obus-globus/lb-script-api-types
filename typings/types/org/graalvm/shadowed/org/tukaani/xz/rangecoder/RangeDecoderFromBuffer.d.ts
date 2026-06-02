import type { DataInputStream } from '../../../../../../../java/io/DataInputStream.d.ts'
import type { ArrayCache } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { RangeDecoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/rangecoder/RangeDecoder.d.ts'
export class RangeDecoderFromBuffer extends RangeDecoder {
    static initProbs(paramprobs: number[]): void;
    constructor(inputSizeMax: number, arrayCache: ArrayCache)
    // private buf: number[];
    // private pos: number;
    isFinished(): boolean;
    normalize(): void;
    prepareInputBuffer(in_: DataInputStream, len: number): void;
    putArraysToCache(arrayCache: ArrayCache): void;
}