import type { ImmutableSet$Builder } from '../../../../../../../com/google/common/collect/ImmutableSet$Builder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Property } from '../../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
export class CopyBlockState$Builder extends LootItemConditionalFunction$Builder<CopyBlockState$Builder> {
    private constructor(block: Block)
    // private block: Holder<Block>;
    // private properties: ImmutableSet$Builder<Property<Object>>;
    build(): LootItemFunction;
    copy(property: Property<Object>): CopyBlockState$Builder;
    getThis(): CopyBlockState$Builder;
}