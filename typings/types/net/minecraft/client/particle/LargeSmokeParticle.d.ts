import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SmokeParticle } from '../../../../net/minecraft/client/particle/SmokeParticle.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
export class LargeSmokeParticle extends SmokeParticle {
    constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number, sprites: SpriteSet)
}