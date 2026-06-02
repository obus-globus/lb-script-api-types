import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CustomDamageHandler } from '../../../../../net/fabricmc/fabric/api/item/v1/CustomDamageHandler.d.ts'
import type { EquipmentSlotProvider } from '../../../../../net/fabricmc/fabric/api/item/v1/EquipmentSlotProvider.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class FabricItemInternals$ExtraData extends Object {
    constructor()
    // private customDamageHandler: (param0: ItemStack, param1: number, param2: LivingEntity, param3: EquipmentSlot, param4: () => void) => kotlin.Int;
    // private equipmentSlotProvider: (param0: LivingEntity, param1: ItemStack) => net.minecraft.world.entity.EquipmentSlot;
    customDamage(arg0: (param0: ItemStack, param1: number, param2: LivingEntity, param3: EquipmentSlot, param4: () => void) => kotlin.Int): void;
    equipmentSlot(arg0: (param0: LivingEntity, param1: ItemStack) => net.minecraft.world.entity.EquipmentSlot): void;
}