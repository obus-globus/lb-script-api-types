import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { PortalParticle } from '../../../../net/minecraft/client/particle/PortalParticle.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class ReversePortalParticle extends PortalParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, xd: number, yd: number, zd: number, sprite: TextureAtlasSprite)
    getQuadSize(a: number): number;
    tick(): void;
}