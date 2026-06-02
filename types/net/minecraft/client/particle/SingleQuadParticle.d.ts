import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Particle } from '../../../../net/minecraft/client/particle/Particle.d.ts'
import type { ParticleRenderType } from '../../../../net/minecraft/client/particle/ParticleRenderType.d.ts'
import type { SingleQuadParticle$FacingCameraMode } from '../../../../net/minecraft/client/particle/SingleQuadParticle$FacingCameraMode.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
import type { QuadParticleRenderState } from '../../../../net/minecraft/client/renderer/state/level/QuadParticleRenderState.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Quaternionf } from '../../../../org/joml/Quaternionf.d.ts'
export abstract class SingleQuadParticle extends Particle {
    constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number, sprite: TextureAtlasSprite)
    constructor(level: ClientLevel, x: number, y: number, z: number, sprite: TextureAtlasSprite)
    // private alpha: number;
    // private bCol: number;
    // private gCol: number;
    // private oRoll: number;
    // private quadSize: number;
    // private rCol: number;
    // private roll: number;
    // private shouldTickSprite: boolean;
    // private sprite: TextureAtlasSprite;
    extract(particleTypeRenderState: QuadParticleRenderState, camera: Camera, partialTickTime: number): void;
    extractRotatedQuad(particleTypeRenderState: QuadParticleRenderState, camera: Camera, rotation: Quaternionf, partialTickTime: number): void;
    extractRotatedQuad(particleTypeRenderState: QuadParticleRenderState, rotation: Quaternionf, x: number, y: number, z: number, partialTickTime: number): void;
    getFacingCameraMode(): SingleQuadParticle$FacingCameraMode;
    getGroup(): ParticleRenderType;
    getLayer(): SingleQuadParticle$Layer;
    getQuadSize(a: number): number;
    getU0(): number;
    getU1(): number;
    getV0(): number;
    getV1(): number;
    scale(scale: number): Particle;
    setAlpha(alpha: number): void;
    setColor(r: number, g: number, b: number): void;
    setSprite(icon: TextureAtlasSprite): void;
    setSpriteFromAge(sprites: SpriteSet): void;
    toString(): string;
}