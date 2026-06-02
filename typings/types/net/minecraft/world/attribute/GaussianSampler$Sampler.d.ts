import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GaussianSampler$Sampler<V extends Object | number | string | boolean> extends Object{
    get(x: number, y: number, z: number): V;
}