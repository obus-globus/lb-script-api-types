import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SimpleAnimatedParticle } from '../../../../net/minecraft/client/particle/SimpleAnimatedParticle.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
export class SquidInkParticle extends SimpleAnimatedParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number, color: number, sprites: SpriteSet)
    tick(): void;
}