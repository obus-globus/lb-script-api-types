import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BreakingItemParticle$ItemParticleProvider } from '../../../../net/minecraft/client/particle/BreakingItemParticle$ItemParticleProvider.d.ts'
import type { Particle } from '../../../../net/minecraft/client/particle/Particle.d.ts'
import type { ItemParticleOption } from '../../../../net/minecraft/core/particles/ItemParticleOption.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class BreakingItemParticle$Provider extends BreakingItemParticle$ItemParticleProvider<ItemParticleOption> {
    constructor()
    createParticle(options: ItemParticleOption, level: ClientLevel, x: number, y: number, z: number, xAux: number, yAux: number, zAux: number, random: RandomSource): Particle;
}