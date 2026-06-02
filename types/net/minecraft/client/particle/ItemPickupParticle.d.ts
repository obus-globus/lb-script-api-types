import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Particle } from '../../../../net/minecraft/client/particle/Particle.d.ts'
import type { ParticleRenderType } from '../../../../net/minecraft/client/particle/ParticleRenderType.d.ts'
import type { EntityRenderState } from '../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ItemPickupParticle extends Particle {
    constructor(level: ClientLevel, itemEntity: EntityRenderState, target: Entity, movement: Vec3)
    // private itemRenderState: EntityRenderState;
    // private life: number;
    // private target: Entity;
    // private targetX: number;
    // private targetXOld: number;
    // private targetY: number;
    // private targetYOld: number;
    // private targetZ: number;
    // private targetZOld: number;
    getGroup(): ParticleRenderType;
    // private saveOldPosition(): void;
    tick(): void;
    // private updatePosition(): void;
}