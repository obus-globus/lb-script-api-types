import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { NoRenderParticle } from '../../../../net/minecraft/client/particle/NoRenderParticle.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TrackingEmitter extends NoRenderParticle {
    constructor(level: ClientLevel, entity: Entity, particleType: ParticleOptions)
    constructor(level: ClientLevel, entity: Entity, particleType: ParticleOptions, lifeTime: number)
    private constructor(level: ClientLevel, entity: Entity, particleType: ParticleOptions, lifeTime: number, movement: Vec3)
    // private entity: Entity;
    // private life: number;
    // private lifeTime: number;
    // private particleType: ParticleOptions;
    tick(): void;
}