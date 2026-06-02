import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { EntityEquipment } from '../../../../../net/minecraft/world/entity/EntityEquipment.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class PlayerEquipment extends EntityEquipment {
    static CODEC: Codec<EntityEquipment>;
    constructor(player: Player)
    // private player: Player;
    get(slot: EquipmentSlot): ItemStack;
    isEmpty(): boolean;
    set(slot: EquipmentSlot, itemStack: ItemStack): ItemStack;
}