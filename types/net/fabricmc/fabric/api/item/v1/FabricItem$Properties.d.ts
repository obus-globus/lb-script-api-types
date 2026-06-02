import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CustomDamageHandler } from '../../../../../../net/fabricmc/fabric/api/item/v1/CustomDamageHandler.d.ts'
import type { EquipmentSlotProvider } from '../../../../../../net/fabricmc/fabric/api/item/v1/EquipmentSlotProvider.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface FabricItem$Properties extends Object{
    customDamage(arg0: (param0: ItemStack, param1: number, param2: LivingEntity, param3: EquipmentSlot, param4: () => void) => kotlin.Int): Item$Properties;
    equipmentSlot(arg0: (param0: LivingEntity, param1: ItemStack) => net.minecraft.world.entity.EquipmentSlot): Item$Properties;
    itemId(): ResourceKey<Item>;
    modelId(arg0: Identifier): Item$Properties;
}