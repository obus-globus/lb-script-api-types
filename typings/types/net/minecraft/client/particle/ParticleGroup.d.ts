import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { Particle } from '../../../../net/minecraft/client/particle/Particle.d.ts'
import type { ParticleEngine } from '../../../../net/minecraft/client/particle/ParticleEngine.d.ts'
import type { Frustum } from '../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { ParticleGroupRenderState } from '../../../../net/minecraft/client/renderer/state/level/ParticleGroupRenderState.d.ts'
export abstract class ParticleGroup<P extends Particle> extends Object {
    constructor(engine: ParticleEngine)
    // private engine: ParticleEngine;
    // private particles: P[];
    add(particle: Particle): void;
    extractRenderState(frustum: Frustum, camera: Camera, partialTickTime: number): ParticleGroupRenderState;
    getAll(): P[];
    isEmpty(): boolean;
    size(): number;
    // private tickParticle(particle: Particle): void;
    tickParticles(): void;
}