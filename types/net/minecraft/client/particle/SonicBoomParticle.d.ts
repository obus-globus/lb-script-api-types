import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { HugeExplosionParticle } from '../../../../net/minecraft/client/particle/HugeExplosionParticle.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
export class SonicBoomParticle extends HugeExplosionParticle {
    constructor(level: ClientLevel, x: number, y: number, z: number, size: number, sprites: SpriteSet)
}