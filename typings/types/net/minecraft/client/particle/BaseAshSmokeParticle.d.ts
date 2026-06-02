import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
export abstract class BaseAshSmokeParticle extends SingleQuadParticle {
    constructor(level: ClientLevel, x: number, y: number, z: number, dirX: number, dirY: number, dirZ: number, xa: number, ya: number, za: number, scale: number, sprites: SpriteSet, colorRandom: number, maxLifetime: number, gravity: number, hasPhysics: boolean)
    // private sprites: SpriteSet;
    getLayer(): SingleQuadParticle$Layer;
    getQuadSize(a: number): number;
    tick(): void;
}