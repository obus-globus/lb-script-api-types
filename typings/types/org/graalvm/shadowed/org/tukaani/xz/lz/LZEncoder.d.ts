import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ArrayCache } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { Matches } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/Matches.d.ts'
export abstract class LZEncoder extends Object {
    static MF_BT4: number;
    static MF_HC4: number;
    static getInstance(paramdictSize: number, paramextraSizeBefore: number, paramextraSizeAfter: number, paramniceLen: number, parammatchLenMax: number, parammf: number, paramdepthLimit: number, paramarrayCache: ArrayCache): LZEncoder;
    static getMemoryUsage(paramdictSize: number, paramextraSizeBefore: number, paramextraSizeAfter: number, parammatchLenMax: number, parammf: number): number;
    constructor(dictSize: number, extraSizeBefore: number, extraSizeAfter: number, niceLen: number, matchLenMax: number, arrayCache: ArrayCache)
    // private buf: number[];
    // private bufSize: number;
    // private finishing: boolean;
    // private keepSizeAfter: number;
    // private keepSizeBefore: number;
    // private matchLenMax: number;
    // private niceLen: number;
    // private pendingSize: number;
    // private readLimit: number;
    // private readPos: number;
    // private writePos: number;
    copyUncompressed(out: OutputStream, backward: number, len: number): void;
    fillWindow(in_: number[], off: number, len: number): number;
    getAvail(): number;
    getByte(backward: number): number;
    getByte(forward: number, backward: number): number;
    getMatchLen(dist: number, lenLimit: number): number;
    getMatchLen(forward: number, dist: number, lenLimit: number): number;
    getMatches(): Matches;
    getPos(): number;
    hasEnoughData(alreadyReadLen: number): boolean;
    isStarted(): boolean;
    movePos(requiredForFlushing: number, requiredForFinishing: number): number;
    // private moveWindow(): void;
    // private processPendingBytes(): void;
    putArraysToCache(arrayCache: ArrayCache): void;
    setFinishing(): void;
    setFlushing(): void;
    setPresetDict(dictSize: number, presetDict: number[]): void;
    skip(len: number): void;
    verifyMatches(matches: Matches): boolean;
}