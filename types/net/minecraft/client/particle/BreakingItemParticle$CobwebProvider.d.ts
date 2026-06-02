import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BreakingItemParticle$ItemParticleProvider } from '../../../../net/minecraft/client/particle/BreakingItemParticle$ItemParticleProvider.d.ts'
import type { Particle } from '../../../../net/minecraft/client/particle/Particle.d.ts'
import type { SimpleParticleType } from '../../../../net/minecraft/core/particles/SimpleParticleType.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class BreakingItemParticle$CobwebProvider extends BreakingItemParticle$ItemParticleProvider<SimpleParticleType> {
    constructor()
    createParticle(options: SimpleParticleType, level: ClientLevel, x: number, y: number, z: number, xAux: number, yAux: number, zAux: number, random: RandomSource): Particle;
}