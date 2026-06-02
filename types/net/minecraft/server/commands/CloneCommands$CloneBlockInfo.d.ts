import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { CloneCommands$CloneBlockEntityInfo } from '../../../../net/minecraft/server/commands/CloneCommands$CloneBlockEntityInfo.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class CloneCommands$CloneBlockInfo extends Record {
    private constructor(pos: BlockPos, state: BlockState, blockEntityInfo: CloneCommands$CloneBlockEntityInfo, previousStateAtDestination: BlockState)
    // private blockEntityInfo: CloneCommands$CloneBlockEntityInfo;
    // private pos: BlockPos;
    // private previousStateAtDestination: BlockState;
    // private state: BlockState;
    blockEntityInfo(): CloneCommands$CloneBlockEntityInfo;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pos(): BlockPos;
    previousStateAtDestination(): BlockState;
    state(): BlockState;
    toString(): string;
}