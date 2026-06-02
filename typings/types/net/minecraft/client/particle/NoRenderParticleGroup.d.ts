import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { NoRenderParticle } from '../../../../net/minecraft/client/particle/NoRenderParticle.d.ts'
import type { ParticleEngine } from '../../../../net/minecraft/client/particle/ParticleEngine.d.ts'
import type { ParticleGroup } from '../../../../net/minecraft/client/particle/ParticleGroup.d.ts'
import type { Frustum } from '../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { ParticleGroupRenderState } from '../../../../net/minecraft/client/renderer/state/level/ParticleGroupRenderState.d.ts'
export class NoRenderParticleGroup extends ParticleGroup<NoRenderParticle> {
    constructor(engine: ParticleEngine)
    extractRenderState(frustum: Frustum, camera: Camera, partialTickTime: number): ParticleGroupRenderState;
}