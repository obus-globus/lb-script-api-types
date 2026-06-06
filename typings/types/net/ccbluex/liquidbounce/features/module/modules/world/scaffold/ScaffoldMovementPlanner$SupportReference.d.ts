import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
export class ScaffoldMovementPlanner$SupportReference extends Object {
    constructor(blockPos: BlockPos, offsetX: number, offsetZ: number)
    readonly blockPos: BlockPos;
    readonly offsetX: number;
    readonly offsetZ: number;
    component1(): BlockPos;
    component2(): number;
    component3(): number;
    copy(blockPos: BlockPos, offsetX: number, offsetZ: number): ScaffoldMovementPlanner$SupportReference;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}