import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GaussianSampler$Accumulator<V extends Object | number | string | boolean> extends Object{
    accumulate(weight: number, value: V): void;
}