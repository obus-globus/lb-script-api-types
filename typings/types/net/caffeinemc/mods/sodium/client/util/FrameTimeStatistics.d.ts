import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FrameTimeStatistics extends Object {
    static INSTANCE: FrameTimeStatistics;
    private constructor()
    // private cached: JavaMap<any, any>;
    // private heap: number[];
    // private sampleSize: number;
    // private samples: number[];
    // private writeIndex: number;
    // private compute(): JavaMap<any, any>;
    // private copyMostRecentSamples(arg0: number[], arg1: number, arg2: number): void;
    get(): JavaMap<any, any>;
    invalidate(): void;
    logSample(arg0: number): void;
}