import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockEntityTicker<T extends BlockEntity> extends Object {
    andThen(after: (param0: Level, param1: BlockPos, param2: BlockState, param3: T) => void): (param0: Level, param1: BlockPos, param2: BlockState, param3: T) => void;
    tick(level: Level, pos: BlockPos, state: BlockState, entity: T): void;
}