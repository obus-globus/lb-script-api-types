import type { ArrayCache } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/ArrayCache.d.ts'
import type { Matches } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lz/Matches.d.ts'
import type { LZMAEncoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/LZMAEncoder.d.ts'
import type { Optimum } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/Optimum.d.ts'
import type { State } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/lzma/State.d.ts'
import type { RangeEncoder } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/rangecoder/RangeEncoder.d.ts'
export class LZMAEncoderNormal extends LZMAEncoder {
    static MODE_FAST: number;
    static MODE_NORMAL: number;
    static getDistSlot(paramdist: number): number;
    static getInstance(paramrc: RangeEncoder, paramlc: number, paramlp: number, parampb: number, parammode: number, paramdictSize: number, paramextraSizeBefore: number, paramniceLen: number, parammf: number, paramdepthLimit: number, paramarrayCache: ArrayCache): LZMAEncoder;
    static getMemoryUsage(parammode: number, paramdictSize: number, paramextraSizeBefore: number, parammf: number): number;
    constructor(rc: RangeEncoder, lc: number, lp: number, pb: number, dictSize: number, extraSizeBefore: number, niceLen: number, mf: number, depthLimit: number, arrayCache: ArrayCache)
    // private matches: Matches;
    // private nextState: State;
    // private optCur: number;
    // private optEnd: number;
    // private opts: Optimum[];
    // private repLens: number[];
    // private calc1BytePrices(pos: number, posState: number, avail: number, anyRepPrice: number): void;
    // private calcLongRepPrices(pos: number, posState: number, avail: number, anyRepPrice: number): number;
    // private calcNormalMatchPrices(pos: number, posState: number, avail: number, anyMatchPrice: number, startLen: number): void;
    // private convertOpts(): number;
    getNextSymbol(): number;
    reset(): void;
    // private updateOptStateAndReps(): void;
}