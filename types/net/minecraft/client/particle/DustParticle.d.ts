import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { DustParticleBase } from '../../../../net/minecraft/client/particle/DustParticleBase.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
import type { DustParticleOptions } from '../../../../net/minecraft/core/particles/DustParticleOptions.d.ts'
export class DustParticle extends DustParticleBase<DustParticleOptions> {
    constructor(level: ClientLevel, x: number, y: number, z: number, xAux: number, yAux: number, zAux: number, options: DustParticleOptions, sprites: SpriteSet)
}