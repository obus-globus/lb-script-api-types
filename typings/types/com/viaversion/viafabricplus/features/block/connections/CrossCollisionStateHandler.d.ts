import type { IBlockStateHandler } from '../../../../../../com/viaversion/viafabricplus/features/block/connections/IBlockStateHandler.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class CrossCollisionStateHandler extends Record implements IBlockStateHandler {
    constructor(customAllowed: (param0: BlockState) => boolean)
    // private customAllowed: (param0: BlockState) => boolean;
    connect(arg0: BlockState, arg1: LevelReader, arg2: BlockPos): BlockState;
    // private connectsTo(arg0: BlockGetter, arg1: BlockPos, arg2: Direction): boolean;
    customAllowed(): (param0: BlockState) => boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isExceptionForConnection(arg0: BlockState): boolean;
    toString(): string;
}