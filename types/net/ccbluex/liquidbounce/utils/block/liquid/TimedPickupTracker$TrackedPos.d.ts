import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export class TimedPickupTracker$TrackedPos extends Record {
    constructor(pos: BlockPos, timestamp: number)
    // private pos: BlockPos;
    /*not mapped: */ pos(): BlockPos;
    // private timestamp: number;
    /*not mapped: */ timestamp(): number;
    component1(): BlockPos;
    component2(): number;
    copy(pos: BlockPos, timestamp: number): TimedPickupTracker$TrackedPos;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}