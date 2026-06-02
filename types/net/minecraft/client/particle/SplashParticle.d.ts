import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { WaterDropParticle } from '../../../../net/minecraft/client/particle/WaterDropParticle.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class SplashParticle extends WaterDropParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number, sprite: TextureAtlasSprite)
}