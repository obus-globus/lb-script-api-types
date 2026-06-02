import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleEngineAccessor } from '../../../../net/fabricmc/fabric/mixin/client/particle/ParticleEngineAccessor.d.ts'
import type { Camera } from '../../../../net/minecraft/client/Camera.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Particle } from '../../../../net/minecraft/client/particle/Particle.d.ts'
import type { ParticleGroup } from '../../../../net/minecraft/client/particle/ParticleGroup.d.ts'
import type { ParticleRenderType } from '../../../../net/minecraft/client/particle/ParticleRenderType.d.ts'
import type { ParticleResources } from '../../../../net/minecraft/client/particle/ParticleResources.d.ts'
import type { TrackingEmitter } from '../../../../net/minecraft/client/particle/TrackingEmitter.d.ts'
import type { Frustum } from '../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { ParticlesRenderState } from '../../../../net/minecraft/client/renderer/state/level/ParticlesRenderState.d.ts'
import type { ParticleLimit } from '../../../../net/minecraft/core/particles/ParticleLimit.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class ParticleEngine extends Object implements ParticleEngineAccessor {
    static getParticleRenderTypes(): ParticleRenderType[];
    constructor(level: ClientLevel, resourceManager: ParticleResources)
    level: ClientLevel;
    // private particles: Map<ParticleRenderType, ParticleGroup<Object>>;
    // private particlesToAdd: Particle[];
    // private random: RandomSource;
    resourceManager: ParticleResources;
    // private trackedParticleCounts: Object2IntOpenHashMap<ParticleLimit>;
    // private trackingEmitters: TrackingEmitter[];
    add(p: Particle): void;
    clearParticles(): void;
    countParticles(): string;
    createParticle(options: ParticleOptions, x: number, y: number, z: number, xa: number, ya: number, za: number): Particle;
    // private createParticleGroup(type: ParticleRenderType): ParticleGroup<Object>;
    createTrackingEmitter(entity: Entity, particle: ParticleOptions): void;
    createTrackingEmitter(entity: Entity, particle: ParticleOptions, lifeTime: number): void;
    extract(particlesRenderState: ParticlesRenderState, frustum: Frustum, camera: Camera, partialTickTime: number): void;
    // private hasSpaceInParticleLimit(limit: ParticleLimit): boolean;
    // private makeParticle<T extends ParticleOptions>(options: T, x: number, y: number, z: number, xa: number, ya: number, za: number): Particle;
    setLevel(level: ClientLevel): void;
    tick(): void;
    updateCount(limit: ParticleLimit, change: number): void;
}