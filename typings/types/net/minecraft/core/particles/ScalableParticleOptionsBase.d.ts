import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
export abstract class ScalableParticleOptionsBase extends Object implements ParticleOptions {
    static MAX_SCALE: number;
    static MIN_SCALE: number;
    constructor(scale: number)
    readonly scale: number;
    getScale(): number;
}