import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Particle$LifetimeAlpha } from '../../../../net/minecraft/client/particle/Particle$LifetimeAlpha.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { QuadParticleRenderState } from '../../../../net/minecraft/client/renderer/state/level/QuadParticleRenderState.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class FlyTowardsPositionParticle extends SingleQuadParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, xd: number, yd: number, zd: number, isGlowing: boolean, lifetimeAlpha: Particle$LifetimeAlpha, sprite: TextureAtlasSprite)
    private constructor(level: ClientLevel, x: number, y: number, z: number, xd: number, yd: number, zd: number, sprite: TextureAtlasSprite)
    // private isGlowing: boolean;
    // private lifetimeAlpha: Particle$LifetimeAlpha;
    // private xStart: number;
    // private yStart: number;
    // private zStart: number;
    extract(particleTypeRenderState: QuadParticleRenderState, camera: Camera, partialTickTime: number): void;
    getLayer(): SingleQuadParticle$Layer;
    getLightCoords(a: number): number;
    move(xa: number, ya: number, za: number): void;
    tick(): void;
}