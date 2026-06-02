import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlinkEspData extends Record {
    constructor(entity: Entity, pos: Vec3, rotation: Rotation)
    // private entity: Entity;
    /*not mapped: */ entity(): Entity;
    // private pos: Vec3;
    /*not mapped: */ pos(): Vec3;
    // private rotation: Rotation;
    /*not mapped: */ rotation(): Rotation;
    component1(): Entity;
    component2(): Vec3;
    component3(): Rotation;
    copy(entity: Entity, pos: Vec3, rotation: Rotation): BlinkEspData;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}