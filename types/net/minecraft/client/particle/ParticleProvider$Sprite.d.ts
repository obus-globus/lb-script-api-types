import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export interface ParticleProvider$Sprite<T extends ParticleOptions> extends Object{
    createParticle(options: T, level: ClientLevel, x: number, y: number, z: number, xAux: number, yAux: number, zAux: number, random: RandomSource): SingleQuadParticle;
}