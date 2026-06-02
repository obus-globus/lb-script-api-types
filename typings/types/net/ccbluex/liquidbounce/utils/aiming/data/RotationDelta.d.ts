import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vec2 } from '../../../../../../net/minecraft/world/phys/Vec2.d.ts'
export class RotationDelta extends Record {
    constructor(deltaYaw: number, deltaPitch: number)
    // private deltaPitch: number;
    /*not mapped: */ deltaPitch(): number;
    // private deltaYaw: number;
    /*not mapped: */ deltaYaw(): number;
    component1(): number;
    component2(): number;
    copy(deltaYaw: number, deltaPitch: number): RotationDelta;
    equals(other: Object | null): boolean;
    hashCode(): number;
    length(): number;
    toString(): string;
    toVec2f(): Vec2;
}