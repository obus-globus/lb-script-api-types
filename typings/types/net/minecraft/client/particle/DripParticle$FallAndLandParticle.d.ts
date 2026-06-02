import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { DripParticle$FallingParticle } from '../../../../net/minecraft/client/particle/DripParticle$FallingParticle.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
export class DripParticle$FallAndLandParticle extends DripParticle$FallingParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, type: Fluid, landParticle: ParticleOptions, sprite: TextureAtlasSprite)
    // private landParticle: ParticleOptions;
    postMoveUpdate(): void;
}