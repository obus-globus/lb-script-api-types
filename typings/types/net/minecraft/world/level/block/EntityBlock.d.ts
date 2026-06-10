import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityTicker } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityTicker.d.ts'
import type { BlockEntityType } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { GameEventListener } from '../../../../../net/minecraft/world/level/gameevent/GameEventListener.d.ts'
export interface EntityBlock extends Object {
    getListener<T extends BlockEntity>(level: ServerLevel, blockEntity: T): GameEventListener;
    getTicker<T extends BlockEntity>(level: Level, blockState: BlockState, type: BlockEntityType<T>): (param0: Level, param1: BlockPos, param2: BlockState, param3: T) => void;
    newBlockEntity(worldPosition: BlockPos, blockState: BlockState): BlockEntity;
}