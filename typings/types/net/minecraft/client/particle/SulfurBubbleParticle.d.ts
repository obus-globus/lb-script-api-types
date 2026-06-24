import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class SulfurBubbleParticle extends SingleQuadParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, za: number, sprite: TextureAtlasSprite)
    // private sizeStart: number;
    // private yEnd: number;
    // private yPrev: number;
    // private yStart: number;
    getLayer(): SingleQuadParticle$Layer;
    // private randomHorizontalWiggling(): number;
    tick(): void;
}