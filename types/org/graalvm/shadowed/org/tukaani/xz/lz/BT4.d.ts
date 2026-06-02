import type { ArrayCache } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { Hash234 } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/Hash234.d.ts'
import type { LZEncoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/LZEncoder.d.ts'
import type { Matches } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/Matches.d.ts'
export class BT4 extends LZEncoder {
    static MF_BT4: number;
    static MF_HC4: number;
    static getInstance(paramdictSize: number, paramextraSizeBefore: number, paramextraSizeAfter: number, paramniceLen: number, parammatchLenMax: number, parammf: number, paramdepthLimit: number, paramarrayCache: ArrayCache): LZEncoder;
    static getMemoryUsage(paramdictSize: number, paramextraSizeBefore: number, paramextraSizeAfter: number, parammatchLenMax: number, parammf: number): number;
    constructor(dictSize: number, beforeSizeMin: number, readAheadMax: number, niceLen: number, matchLenMax: number, depthLimit: number, arrayCache: ArrayCache)
    // private cyclicPos: number;
    // private cyclicSize: number;
    // private depthLimit: number;
    // private hash: Hash234;
    // private lzPos: number;
    readonly matches: Matches;
    // private tree: number[];
    getMatches(): Matches;
    // private movePos(): number;
    putArraysToCache(arrayCache: ArrayCache): void;
    skip(len: number): void;
    // private skip(niceLenLimit: number, currentMatch: number): void;
}