import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleAutoDodge$HitInfo extends Object {
    constructor(tickDelta: number, arrowEntity: Entity, hitPos: Vec3, prevArrowPos: Vec3, arrowVelocity: Vec3)
    readonly arrowEntity: Entity;
    readonly arrowVelocity: Vec3;
    readonly hitPos: Vec3;
    readonly prevArrowPos: Vec3;
    readonly tickDelta: number;
    component1(): number;
    component2(): Entity;
    component3(): Vec3;
    component4(): Vec3;
    component5(): Vec3;
    copy(tickDelta: number, arrowEntity: Entity, hitPos: Vec3, prevArrowPos: Vec3, arrowVelocity: Vec3): ModuleAutoDodge$HitInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}