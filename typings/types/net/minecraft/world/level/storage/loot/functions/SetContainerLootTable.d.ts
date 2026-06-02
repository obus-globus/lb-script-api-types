import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockEntityType } from '../../../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootTable } from '../../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetContainerLootTable extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetContainerLootTable>;
    static withLootTable(paramtype: BlockEntityType<Object>, paramvalue: ResourceKey<LootTable>): LootItemConditionalFunction$Builder<Object>;
    static withLootTable(paramtype: BlockEntityType<Object>, paramvalue: ResourceKey<LootTable>, paramseed: number): LootItemConditionalFunction$Builder<Object>;
    private constructor(predicates: LootItemCondition[], name: ResourceKey<LootTable>, seed: number, type: Holder<BlockEntityType<Object>>)
    // private name: ResourceKey<LootTable>;
    // private seed: number;
    // private type: Holder<BlockEntityType<Object>>;
    codec(): MapCodec<SetContainerLootTable>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
    validate(context: ValidationContext): void;
}