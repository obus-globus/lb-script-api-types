import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class RotationWithVector extends Record {
    constructor(rotation: Rotation, vec: Vec3)
    // private rotation: Rotation;
    /*not mapped: */ rotation(): Rotation;
    // private vec: Vec3;
    /*not mapped: */ vec(): Vec3;
    component1(): Rotation;
    component2(): Vec3;
    copy(rotation: Rotation, vec: Vec3): RotationWithVector;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}