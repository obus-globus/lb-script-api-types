import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { ParticleEngine } from '../../../../net/minecraft/client/particle/ParticleEngine.d.ts'
import type { ParticleGroup } from '../../../../net/minecraft/client/particle/ParticleGroup.d.ts'
import type { ParticleRenderType } from '../../../../net/minecraft/client/particle/ParticleRenderType.d.ts'
import type { SingleQuadParticle } from '../../../../net/minecraft/client/particle/SingleQuadParticle.d.ts'
import type { Frustum } from '../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { ParticleGroupRenderState } from '../../../../net/minecraft/client/renderer/state/level/ParticleGroupRenderState.d.ts'
import type { QuadParticleRenderState } from '../../../../net/minecraft/client/renderer/state/level/QuadParticleRenderState.d.ts'
export class QuadParticleGroup extends ParticleGroup<SingleQuadParticle> {
    constructor(engine: ParticleEngine, particleType: ParticleRenderType)
    // private particleType: ParticleRenderType;
    // private particleTypeRenderState: QuadParticleRenderState;
    extractRenderState(frustum: Frustum, camera: Camera, partialTickTime: number): ParticleGroupRenderState;
}