import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class DripParticle extends SingleQuadParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, type: Fluid, sprite: TextureAtlasSprite)
    // private isGlowing: boolean;
    // private type: Fluid;
    getLayer(): SingleQuadParticle$Layer;
    getLightCoords(a: number): number;
    getType(): Fluid;
    postMoveUpdate(): void;
    preMoveUpdate(): void;
    tick(): void;
}