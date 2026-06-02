import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { QuadParticleRenderState } from '../../../../net/minecraft/client/renderer/state/level/QuadParticleRenderState.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { PositionSource } from '../../../../net/minecraft/world/level/gameevent/PositionSource.d.ts'
export class VibrationSignalParticle extends SingleQuadParticle {
    private constructor(level: ClientLevel, x: number, y: number, z: number, target: PositionSource, arrivalInTicks: number, sprite: TextureAtlasSprite)
    // private pitch: number;
    // private pitchO: number;
    // private rot: number;
    // private rotO: number;
    // private target: PositionSource;
    extract(particleTypeRenderState: QuadParticleRenderState, camera: Camera, partialTickTime: number): void;
    getLayer(): SingleQuadParticle$Layer;
    getLightCoords(a: number): number;
    tick(): void;
}