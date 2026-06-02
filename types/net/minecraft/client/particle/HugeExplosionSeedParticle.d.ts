import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { NoRenderParticle } from '../../../../net/minecraft/client/particle/NoRenderParticle.d.ts'
export class HugeExplosionSeedParticle extends NoRenderParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number)
    tick(): void;
}