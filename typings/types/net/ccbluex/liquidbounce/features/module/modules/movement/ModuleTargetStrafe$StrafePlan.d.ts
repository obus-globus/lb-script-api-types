import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleTargetStrafe$StrafePlan extends Object {
    constructor(target: LivingEntity, orbitRadius: number, strafeVec: Vec3, pointCoords: Vec3, pointValid: boolean)
    readonly orbitRadius: number;
    readonly pointCoords: Vec3;
    readonly pointValid: boolean;
    readonly strafeVec: Vec3;
    readonly target: LivingEntity;
    component1(): LivingEntity;
    component2(): number;
    component3(): Vec3;
    component4(): Vec3;
    component5(): boolean;
    copy(target: LivingEntity, orbitRadius: number, strafeVec: Vec3, pointCoords: Vec3, pointValid: boolean): ModuleTargetStrafe$StrafePlan;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}