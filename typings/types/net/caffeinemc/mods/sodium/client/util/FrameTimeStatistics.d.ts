import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FrameTimeStatistics extends Object {
    static INSTANCE: FrameTimeStatistics;
    private constructor()
    // private cached: { [key: string]: any };
    // private heap: number[];
    // private sampleSize: number;
    // private samples: number[];
    // private writeIndex: number;
    // private compute(): { [key: string]: any };
    // private copyMostRecentSamples(arg0: number[], arg1: number, arg2: number): void;
    get(): { [key: string]: any };
    invalidate(): void;
    logSample(arg0: number): void;
}