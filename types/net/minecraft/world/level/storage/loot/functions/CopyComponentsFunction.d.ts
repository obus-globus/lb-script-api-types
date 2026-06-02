import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContextArg } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContextArg.d.ts'
import type { CopyComponentsFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/CopyComponentsFunction$Builder.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class CopyComponentsFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<CopyComponentsFunction>;
    static copyComponentsFromBlockEntity(paramsource: ContextKey<Object>): CopyComponentsFunction$Builder;
    static copyComponentsFromEntity(paramsource: ContextKey<Object>): CopyComponentsFunction$Builder;
    private constructor(predicates: LootItemCondition[], source: LootContextArg<DataComponentGetter>, include: Optional<DataComponentType<Object>[]>, exclude: Optional<DataComponentType<Object>[]>)
    // private bakedPredicate: (param0: DataComponentType<Object>) => kotlin.Boolean;
    // private exclude: Optional<DataComponentType<Object>[]>;
    // private include: Optional<DataComponentType<Object>[]>;
    // private source: LootContextArg<DataComponentGetter>;
    codec(): MapCodec<CopyComponentsFunction>;
    getReferencedContextParams(): ContextKey<Object>[];
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}