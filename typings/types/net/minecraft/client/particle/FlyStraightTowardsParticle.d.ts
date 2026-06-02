import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class FlyStraightTowardsParticle extends SingleQuadParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, xd: number, yd: number, zd: number, startColor: number, endColor: number, sprite: TextureAtlasSprite)
    // private endColor: number;
    // private startColor: number;
    // private xStart: number;
    // private yStart: number;
    // private zStart: number;
    getLayer(): SingleQuadParticle$Layer;
    getLightCoords(a: number): number;
    move(xa: number, ya: number, za: number): void;
    tick(): void;
}