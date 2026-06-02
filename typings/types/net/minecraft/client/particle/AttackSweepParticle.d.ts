import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
export class AttackSweepParticle extends SingleQuadParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, size: number, sprites: SpriteSet)
    // private sprites: SpriteSet;
    getLayer(): SingleQuadParticle$Layer;
    getLightCoords(a: number): number;
    tick(): void;
}