import type { ArrayCache } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { LZEncoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/LZEncoder.d.ts'
import type { Matches } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/Matches.d.ts'
import type { LZMACoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMACoder.d.ts'
import type { LZMAEncoder$LengthEncoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMAEncoder$LengthEncoder.d.ts'
import type { LZMAEncoder$LiteralEncoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMAEncoder$LiteralEncoder.d.ts'
import type { State } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/State.d.ts'
import type { RangeEncoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/rangecoder/RangeEncoder.d.ts'
export abstract class LZMAEncoder extends LZMACoder {
    static MODE_FAST: number;
    static MODE_NORMAL: number;
    static getDistSlot(paramdist: number): number;
    static getInstance(paramrc: RangeEncoder, paramlc: number, paramlp: number, parampb: number, parammode: number, paramdictSize: number, paramextraSizeBefore: number, paramniceLen: number, parammf: number, paramdepthLimit: number, paramarrayCache: ArrayCache): LZMAEncoder;
    static getMemoryUsage(parammode: number, paramdictSize: number, paramextraSizeBefore: number, parammf: number): number;
    constructor(rc: RangeEncoder, lz: LZEncoder, lc: number, lp: number, pb: number, dictSize: number, niceLen: number)
    // private alignPriceCount: number;
    // private alignPrices: number[];
    // private back: number;
    // private distPriceCount: number;
    // private distSlotPrices: number[][];
    // private distSlotPricesSize: number;
    // private fullDistPrices: number[][];
    // private literalEncoder: LZMAEncoder$LiteralEncoder;
    // private lz: LZEncoder;
    // private matchLenEncoder: LZMAEncoder$LengthEncoder;
    // private niceLen: number;
    // private rc: RangeEncoder;
    // private readAhead: number;
    // private repLenEncoder: LZMAEncoder$LengthEncoder;
    readonly uncompressedSize: number;
    encodeForLZMA1(): void;
    encodeForLZMA2(): boolean;
    // private encodeInit(): boolean;
    encodeLZMA1EndMarker(): void;
    // private encodeMatch(dist: number, len: number, posState: number): void;
    // private encodeRepMatch(rep: number, len: number, posState: number): void;
    // private encodeSymbol(): boolean;
    getAnyMatchPrice(state: State, posState: number): number;
    getAnyRepPrice(anyMatchPrice: number, state: State): number;
    getLZEncoder(): LZEncoder;
    getLongRepAndLenPrice(rep: number, len: number, state: State, posState: number): number;
    getLongRepPrice(anyRepPrice: number, rep: number, state: State, posState: number): number;
    getMatchAndLenPrice(normalMatchPrice: number, dist: number, len: number, posState: number): number;
    getMatches(): Matches;
    getNextSymbol(): number;
    getNormalMatchPrice(anyMatchPrice: number, state: State): number;
    getShortRepPrice(anyRepPrice: number, state: State, posState: number): number;
    getUncompressedSize(): number;
    putArraysToCache(arrayCache: ArrayCache): void;
    reset(): void;
    resetUncompressedSize(): void;
    skip(len: number): void;
    // private updateAlignPrices(): void;
    // private updateDistPrices(): void;
    updatePrices(): void;
}