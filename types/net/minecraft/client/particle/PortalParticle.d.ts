import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class PortalParticle extends SingleQuadParticle {
    constructor(level: ClientLevel, x: number, y: number, z: number, xd: number, yd: number, zd: number, sprite: TextureAtlasSprite)
    // private xStart: number;
    // private yStart: number;
    // private zStart: number;
    getLayer(): SingleQuadParticle$Layer;
    getLightCoords(a: number): number;
    getQuadSize(a: number): number;
    move(xa: number, ya: number, za: number): void;
    tick(): void;
}