import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export interface ItemEvents$UseCallback extends Object{
    use(arg0: Level, arg1: Player, arg2: InteractionHand): InteractionResult;
}