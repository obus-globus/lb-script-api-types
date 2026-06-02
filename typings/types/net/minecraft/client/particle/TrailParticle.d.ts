import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TrailParticle extends SingleQuadParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, xAux: number, yAux: number, zAux: number, target: Vec3, color: number, sprite: TextureAtlasSprite)
    // private target: Vec3;
    getLayer(): SingleQuadParticle$Layer;
    getLightCoords(a: number): number;
    tick(): void;
}