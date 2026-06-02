import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class SimpleVerticalParticle extends SingleQuadParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number, sprite: TextureAtlasSprite, upwards: boolean)
    getLayer(): SingleQuadParticle$Layer;
}