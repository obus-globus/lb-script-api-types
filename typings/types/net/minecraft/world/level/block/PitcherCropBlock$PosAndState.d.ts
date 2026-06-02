import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class PitcherCropBlock$PosAndState extends Record {
    private constructor(pos: BlockPos, state: BlockState)
    // private pos: BlockPos;
    // private state: BlockState;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pos(): BlockPos;
    state(): BlockState;
    toString(): string;
}