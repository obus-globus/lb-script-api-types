import type { ImmutableList$Builder } from '../../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { LootContextArg } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContextArg.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
export class CopyComponentsFunction$Builder extends LootItemConditionalFunction$Builder<CopyComponentsFunction$Builder> {
    private constructor(source: LootContextArg<DataComponentGetter>)
    // private exclude: Optional<ImmutableList$Builder<DataComponentType<Object>>>;
    // private include: Optional<ImmutableList$Builder<DataComponentType<Object>>>;
    // private source: LootContextArg<DataComponentGetter>;
    build(): LootItemFunction;
    exclude(type: DataComponentType<Object>): CopyComponentsFunction$Builder;
    getThis(): CopyComponentsFunction$Builder;
    include(type: DataComponentType<Object>): CopyComponentsFunction$Builder;
}