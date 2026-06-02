import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Entity } from '../../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
export class CombatTarget extends Object {
    constructor(entity: Entity, distance: number, range: number, outOfDistance: boolean, targetRotation: Rotation, requiredTargetRotation: Rotation, outOfDanger: boolean)
    readonly distance: number;
    readonly entity: Entity;
    readonly outOfDanger: boolean;
    readonly outOfDistance: boolean;
    readonly range: number;
    readonly requiredTargetRotation: Rotation;
    readonly targetRotation: Rotation;
    component1(): Entity;
    component2(): number;
    component3(): number;
    component4(): boolean;
    component5(): Rotation;
    component6(): Rotation;
    component7(): boolean;
    copy(entity: Entity, distance: number, range: number, outOfDistance: boolean, targetRotation: Rotation, requiredTargetRotation: Rotation, outOfDanger: boolean): CombatTarget;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}