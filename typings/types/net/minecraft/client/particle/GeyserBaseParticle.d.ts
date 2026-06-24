import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BaseAshSmokeParticle } from '../../../../net/minecraft/client/particle/BaseAshSmokeParticle.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
export class GeyserBaseParticle extends BaseAshSmokeParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, xAux: number, yAux: number, zAux: number, waterBlocks: number, burstImpulseBase: number, sprites: SpriteSet)
}