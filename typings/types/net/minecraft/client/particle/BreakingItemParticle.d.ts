import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class BreakingItemParticle extends SingleQuadParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number, sprite: TextureAtlasSprite)
    constructor(level: ClientLevel, x: number, y: number, z: number, sprite: TextureAtlasSprite)
    readonly layer: SingleQuadParticle$Layer;
    // private uo: number;
    // private vo: number;
    getLayer(): SingleQuadParticle$Layer;
    getU0(): number;
    getU1(): number;
    getV0(): number;
    getV1(): number;
}