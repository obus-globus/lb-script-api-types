import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FrameTimeStatistics$Percentile } from '../../../../../../net/caffeinemc/mods/sodium/client/util/FrameTimeStatistics$Percentile.d.ts'
export class FrameTimeStatistics extends Object {
    static INSTANCE: FrameTimeStatistics;
    private constructor()
    // private cached: Reference2LongArrayMap<FrameTimeStatistics$Percentile>;
    // private heap: number[];
    // private sampleSize: number;
    // private samples: number[];
    // private writeIndex: number;
    // private compute(): Reference2LongArrayMap<FrameTimeStatistics$Percentile>;
    // private copyMostRecentSamples(arg0: number[], arg1: number, arg2: number): void;
    get(): Reference2LongArrayMap<FrameTimeStatistics$Percentile>;
    invalidate(): void;
    logSample(arg0: number): void;
}