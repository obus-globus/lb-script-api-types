import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InteractionHand } from '../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../../../net/minecraft/world/InteractionResult.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { EntityHitResult } from '../../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
export interface UseEntityCallback extends Object{
    interact(arg0: Player, arg1: Level, arg2: InteractionHand, arg3: Entity, arg4: EntityHitResult): InteractionResult;
}