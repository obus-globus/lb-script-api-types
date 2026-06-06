import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../java/lang/Comparable.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class ScaffoldMovementPlanner$SupportCandidate extends Object implements Comparable<ScaffoldMovementPlanner$SupportCandidate> {
    constructor(blockPos: BlockPos, overlapArea: number, surfaceDelta: number, horizontalDistanceToPlayerSqr: number)
    readonly blockPos: BlockPos;
    readonly horizontalDistanceToPlayerSqr: number;
    readonly overlapArea: number;
    readonly surfaceDelta: number;
    compareTo(other: ScaffoldMovementPlanner$SupportCandidate): number;
    component1(): BlockPos;
    component2(): number;
    component3(): number;
    component4(): number;
    copy(blockPos: BlockPos, overlapArea: number, surfaceDelta: number, horizontalDistanceToPlayerSqr: number): ScaffoldMovementPlanner$SupportCandidate;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}