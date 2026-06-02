import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { PlayerPickItemEvents$PickItemFromBlock } from '../../../../../../net/fabricmc/fabric/api/event/player/PlayerPickItemEvents$PickItemFromBlock.d.ts'
import type { PlayerPickItemEvents$PickItemFromEntity } from '../../../../../../net/fabricmc/fabric/api/event/player/PlayerPickItemEvents$PickItemFromEntity.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class PlayerPickItemEvents extends Object {
    static BLOCK: Event<(param0: ServerPlayer, param1: BlockPos, param2: BlockState, param3: boolean) => net.minecraft.world.item.ItemStack>;
    static ENTITY: Event<(param0: ServerPlayer, param1: Entity, param2: boolean) => net.minecraft.world.item.ItemStack>;
    private constructor()
}