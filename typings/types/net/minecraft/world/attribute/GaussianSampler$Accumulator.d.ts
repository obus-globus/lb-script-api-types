import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GaussianSampler$Accumulator<V extends unknown> extends Object{
    accumulate(weight: number, value: V): void;
}