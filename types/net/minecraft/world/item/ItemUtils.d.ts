import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { ItemEntity } from '../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class ItemUtils extends Object {
    static createFilledResult(paramitemStack: ItemStack, paramplayer: Player, paramnewItemStack: ItemStack): ItemStack;
    static createFilledResult(paramitemStack: ItemStack, paramplayer: Player, paramnewItemStack: ItemStack, paramlimitCreativeStackSize: boolean): ItemStack;
    static onContainerDestroyed(paramcontainer: ItemEntity, paramcontents: Stream<ItemStack>): void;
    static startUsingInstantly(paramlevel: Level, paramplayer: Player, paramhand: InteractionHand): InteractionResult;
    constructor()
}