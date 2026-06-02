import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugEntryLookingAt } from '../../../../../../net/minecraft/client/gui/components/debug/DebugEntryLookingAt.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { TypedInstance } from '../../../../../../net/minecraft/core/TypedInstance.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { StateHolder } from '../../../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
export abstract class DebugEntryLookingAt$DebugEntryLookingAtState<OwnerType extends Object | number | string | boolean, StateType extends StateHolder<OwnerType, StateType> & TypedInstance<OwnerType>> extends DebugEntryLookingAt {
    static addTagEntries(paramresult: string[], paraminstance: TypedInstance<Object>): void;
    constructor(prefix: string)
    // private prefix: string;
    extractInfo(result: string[], level: Level, pos: BlockPos): void;
    getInstance(level: Level, pos: BlockPos): StateType;
}