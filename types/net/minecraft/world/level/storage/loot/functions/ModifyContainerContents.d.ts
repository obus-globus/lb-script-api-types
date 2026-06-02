import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ContainerComponentManipulator } from '../../../../../../../net/minecraft/world/level/storage/loot/ContainerComponentManipulator.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class ModifyContainerContents extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<ModifyContainerContents>;
    private constructor(predicates: LootItemCondition[], component: ContainerComponentManipulator<Object>, modifier: LootItemFunction)
    // private component: ContainerComponentManipulator<Object>;
    // private modifier: LootItemFunction;
    codec(): MapCodec<ModifyContainerContents>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
    validate(context: ValidationContext): void;
}