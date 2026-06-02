import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockHitResult } from '../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
export interface UseBlockCallback extends Object{
    interact(arg0: Player, arg1: Level, arg2: InteractionHand, arg3: BlockHitResult): InteractionResult;
}