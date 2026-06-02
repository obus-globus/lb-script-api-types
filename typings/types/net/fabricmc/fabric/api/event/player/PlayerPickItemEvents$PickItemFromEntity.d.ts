import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface PlayerPickItemEvents$PickItemFromEntity extends Object{
    onPickItemFromEntity(arg0: ServerPlayer, arg1: Entity, arg2: boolean): ItemStack;
}