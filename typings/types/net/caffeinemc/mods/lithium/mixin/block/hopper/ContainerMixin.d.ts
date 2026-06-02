import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LithiumCooldownReceivingInventory } from '../../../../../../../net/caffeinemc/mods/lithium/api/inventory/LithiumCooldownReceivingInventory.d.ts'
import type { LithiumTransferConditionInventory } from '../../../../../../../net/caffeinemc/mods/lithium/api/inventory/LithiumTransferConditionInventory.d.ts'
export interface ContainerMixin extends Object, LithiumCooldownReceivingInventory, LithiumTransferConditionInventory{
    canReceiveTransferCooldown(): boolean;
    lithium$itemInsertionTestRequiresStackSize1(): boolean;
    setTransferCooldown(arg0: number): void;
}