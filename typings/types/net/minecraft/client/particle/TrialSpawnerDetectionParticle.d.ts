import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { SingleQuadParticle$FacingCameraMode } from '../../../../net/minecraft/client/particle/SingleQuadParticle$FacingCameraMode.d.ts'
import type { SingleQuadParticle$Layer } from '../../../../net/minecraft/client/particle/SingleQuadParticle$Layer.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
export class TrialSpawnerDetectionParticle extends SingleQuadParticle {
    constructor(level: ClientLevel, x: number, y: number, z: number, xa: number, ya: number, za: number, scale: number, sprites: SpriteSet)
    // private sprites: SpriteSet;
    getFacingCameraMode(): SingleQuadParticle$FacingCameraMode;
    getLayer(): SingleQuadParticle$Layer;
    getLightCoords(a: number): number;
    getQuadSize(a: number): number;
    tick(): void;
}