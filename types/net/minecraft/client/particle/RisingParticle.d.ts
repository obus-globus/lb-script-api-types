import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export abstract class RisingParticle extends SingleQuadParticle {
    constructor(level: ClientLevel, x: number, y: number, z: number, xd: number, yd: number, zd: number, sprite: TextureAtlasSprite)
}