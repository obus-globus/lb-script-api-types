import type { SizeClassesMetric } from '../../../io/netty/buffer/SizeClassesMetric.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SizeClasses extends Object implements SizeClassesMetric {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private chunkSize: number;
    // private directMemoryCacheAlignment: number;
    // private lookupMaxSize: number;
    // private nPSizes: number;
    // private nSizes: number;
    // private nSubpages: number;
    // private pageIdx2sizeTab: number[];
    // private pageShifts: number;
    // private pageSize: number;
    // private size2idxTab: number[];
    // private sizeIdx2sizeTab: number[];
    // private smallMaxSizeIdx: number;
    normalizeSize(arg0: number): number;
    pageIdx2size(arg0: number): number;
    pageIdx2sizeCompute(arg0: number): number;
    pages2pageIdx(arg0: number): number;
    // private pages2pageIdxCompute(arg0: number, arg1: boolean): number;
    pages2pageIdxFloor(arg0: number): number;
    size2SizeIdx(arg0: number): number;
    sizeIdx2size(arg0: number): number;
    sizeIdx2sizeCompute(arg0: number): number;
}