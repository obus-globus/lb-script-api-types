import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
export class BreakingProgress extends Record {
    constructor(pos: BlockPos, value: number)
    // private pos: BlockPos;
    /*not mapped: */ pos(): BlockPos;
    // private value: number;
    /*not mapped: */ value(): number;
    component1(): BlockPos;
    component2(): number;
    copy(pos: BlockPos, value: number): BreakingProgress;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}