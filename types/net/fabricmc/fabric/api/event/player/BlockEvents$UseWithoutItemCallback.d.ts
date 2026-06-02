import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { InteractionResult } from '../../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockHitResult } from '../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export interface BlockEvents$UseWithoutItemCallback extends Object{
    useWithoutItem(arg0: BlockState, arg1: Level, arg2: BlockPos, arg3: Player, arg4: BlockHitResult): InteractionResult;
}