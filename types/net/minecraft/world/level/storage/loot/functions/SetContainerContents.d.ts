import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ContainerComponentManipulator } from '../../../../../../../net/minecraft/world/level/storage/loot/ContainerComponentManipulator.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { SetContainerContents$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/SetContainerContents$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetContainerContents extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetContainerContents>;
    static setContents(paramcomponent: ContainerComponentManipulator<Object>): SetContainerContents$Builder;
    private constructor(predicates: LootItemCondition[], component: ContainerComponentManipulator<Object>, entries: LootPoolEntryContainer[])
    // private component: ContainerComponentManipulator<Object>;
    // private entries: LootPoolEntryContainer[];
    codec(): MapCodec<SetContainerContents>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
    validate(context: ValidationContext): void;
}