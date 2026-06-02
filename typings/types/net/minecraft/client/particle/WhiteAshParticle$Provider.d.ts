import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Particle } from '../../../../net/minecraft/client/particle/Particle.d.ts'
import type { ParticleProvider } from '../../../../net/minecraft/client/particle/ParticleProvider.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
import type { SimpleParticleType } from '../../../../net/minecraft/core/particles/SimpleParticleType.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class WhiteAshParticle$Provider extends Object implements ParticleProvider<SimpleParticleType> {
    constructor(sprites: SpriteSet)
    // private sprites: SpriteSet;
    createParticle(options: SimpleParticleType, level: ClientLevel, x: number, y: number, z: number, xAux: number, yAux: number, zAux: number, random: RandomSource): Particle;
}