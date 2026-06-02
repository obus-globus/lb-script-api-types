import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Particle } from '../../../../net/minecraft/client/particle/Particle.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export interface ParticleProvider<T extends ParticleOptions> extends Object{
    createParticle(options: T, level: ClientLevel, x: number, y: number, z: number, xAux: number, yAux: number, zAux: number, random: RandomSource): Particle;
}