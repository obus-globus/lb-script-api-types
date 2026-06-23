import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
export interface ParticleOptions extends Object{
    getType(): ParticleType<any>;
}