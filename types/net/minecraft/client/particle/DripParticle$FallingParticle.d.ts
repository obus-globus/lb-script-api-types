import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { DripParticle } from '../../../../net/minecraft/client/particle/DripParticle.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class DripParticle$FallingParticle extends DripParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, type: Fluid, sprite: TextureAtlasSprite)
    postMoveUpdate(): void;
}