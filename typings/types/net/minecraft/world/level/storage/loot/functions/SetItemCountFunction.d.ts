import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { NumberProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class SetItemCountFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetItemCountFunction>;
    static setCount(paramcount: NumberProvider): LootItemConditionalFunction$Builder<Object>;
    static setCount(paramcount: NumberProvider, paramadd: boolean): LootItemConditionalFunction$Builder<Object>;
    private constructor(predicates: LootItemCondition[], count: NumberProvider, add: boolean)
    // private add: boolean;
    // private count: NumberProvider;
    codec(): MapCodec<SetItemCountFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
    validate(context: ValidationContext): void;
}