import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class MineTarget extends Object {
    constructor(targetPos: BlockPos)
    readonly blockState: BlockState;
    direction: Direction | null;
    finishReadyTick: number | null;
    finished: boolean;
    progress: number;
    started: boolean;
    readonly targetPos: BlockPos;
    abort(force: boolean): void;
    cleanUp(): void;
    copy(): MineTarget;
    equals(other: Object | null): boolean;
    hashCode(): number;
    init(): void;
    isInvalidOrOutOfRange(): boolean;
    // private isOutOfRange(pos: BlockPos, state: BlockState): boolean;
    updateBlockState(): void;
}