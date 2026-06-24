import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Particle } from '../../../../net/minecraft/client/particle/Particle.d.ts'
import type { ParticleProvider } from '../../../../net/minecraft/client/particle/ParticleProvider.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
import type { GeyserBaseParticleOptions } from '../../../../net/minecraft/core/particles/GeyserBaseParticleOptions.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class GeyserBaseParticle$Provider extends Object implements ParticleProvider<GeyserBaseParticleOptions> {
    constructor(sprites: SpriteSet)
    // private sprites: SpriteSet;
    createParticle(options: GeyserBaseParticleOptions, level: ClientLevel, x: number, y: number, z: number, xAux: number, yAux: number, zAux: number, random: RandomSource): Particle;
}