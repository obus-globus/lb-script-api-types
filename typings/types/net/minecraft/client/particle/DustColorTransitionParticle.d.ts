import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { DustParticleBase } from '../../../../net/minecraft/client/particle/DustParticleBase.d.ts'
import type { SpriteSet } from '../../../../net/minecraft/client/particle/SpriteSet.d.ts'
import type { QuadParticleRenderState } from '../../../../net/minecraft/client/renderer/state/level/QuadParticleRenderState.d.ts'
import type { DustColorTransitionOptions } from '../../../../net/minecraft/core/particles/DustColorTransitionOptions.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class DustColorTransitionParticle extends DustParticleBase<DustColorTransitionOptions> {
    constructor(level: ClientLevel, x: number, y: number, z: number, xAux: number, yAux: number, zAux: number, options: DustColorTransitionOptions, sprites: SpriteSet)
    // private fromColor: Vector3f;
    // private toColor: Vector3f;
    extract(particleTypeRenderState: QuadParticleRenderState, camera: Camera, partialTickTime: number): void;
    // private lerpColors(partialTickTime: number): void;
    // private randomizeColor(color: Vector3f, baseFactor: number): Vector3f;
}