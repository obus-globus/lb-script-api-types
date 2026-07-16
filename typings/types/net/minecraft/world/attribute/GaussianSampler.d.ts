import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GaussianSampler$Accumulator } from '../../../../net/minecraft/world/attribute/GaussianSampler$Accumulator.d.ts'
import type { GaussianSampler$Sampler } from '../../../../net/minecraft/world/attribute/GaussianSampler$Sampler.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class GaussianSampler extends Object {
    static sample<V extends unknown>(paramposition: Vec3, paramsampler: (param0: number, param1: number, param2: number) => V, paramaccumulator: (param0: number, param1: V) => void): void;
    constructor()
}