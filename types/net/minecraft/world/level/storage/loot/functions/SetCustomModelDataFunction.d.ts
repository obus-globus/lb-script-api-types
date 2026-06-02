import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { ListOperation$StandAlone } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ListOperation$StandAlone.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { NumberProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class SetCustomModelDataFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetCustomModelDataFunction>;
    constructor(predicates: LootItemCondition[], floats: Optional<ListOperation$StandAlone<NumberProvider>>, flags: Optional<ListOperation$StandAlone<boolean>>, strings: Optional<ListOperation$StandAlone<string>>, colors: Optional<ListOperation$StandAlone<NumberProvider>>)
    // private colors: Optional<ListOperation$StandAlone<NumberProvider>>;
    // private flags: Optional<ListOperation$StandAlone<boolean>>;
    // private floats: Optional<ListOperation$StandAlone<NumberProvider>>;
    // private strings: Optional<ListOperation$StandAlone<string>>;
    codec(): MapCodec<SetCustomModelDataFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
    validate(context: ValidationContext): void;
}