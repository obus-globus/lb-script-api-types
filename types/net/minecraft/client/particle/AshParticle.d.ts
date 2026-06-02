import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BaseAshSmokeParticle } from '../../../../net/minecraft/client/particle/BaseAshSmokeParticle.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
export class AshParticle extends BaseAshSmokeParticle {
    constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number, scale: number, sprites: SpriteSet)
}