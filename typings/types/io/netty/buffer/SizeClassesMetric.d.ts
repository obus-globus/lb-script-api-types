import type { Object } from '../../../java/lang/Object.d.ts'
export interface SizeClassesMetric extends Object{
    normalizeSize(arg0: number): number;
    pageIdx2size(arg0: number): number;
    pageIdx2sizeCompute(arg0: number): number;
    pages2pageIdx(arg0: number): number;
    pages2pageIdxFloor(arg0: number): number;
    size2SizeIdx(arg0: number): number;
    sizeIdx2size(arg0: number): number;
    sizeIdx2sizeCompute(arg0: number): number;
}