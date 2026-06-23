import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GaussianSampler$Sampler<V extends unknown> extends Object{
    get(x: number, y: number, z: number): V;
}