import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Particle } from '../../../../net/minecraft/client/particle/Particle.d.ts'
import type { ParticleProvider } from '../../../../net/minecraft/client/particle/ParticleProvider.d.ts'
import type { BlockParticleOption } from '../../../../net/minecraft/core/particles/BlockParticleOption.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class TerrainParticle$CrumblingProvider extends Object implements ParticleProvider<BlockParticleOption> {
    constructor()
    createParticle(options: BlockParticleOption, level: ClientLevel, x: number, y: number, z: number, xAux: number, yAux: number, zAux: number, random: RandomSource): Particle;
}