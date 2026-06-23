import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Property } from '../../../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { CopyBlockState$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/CopyBlockState$Builder.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class CopyBlockState extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<CopyBlockState>;
    static copyState(paramblock: Block): CopyBlockState$Builder;
    private constructor(predicates: LootItemCondition[], block: Holder<Block>, propertyNames: string[])
    private constructor(predicates: LootItemCondition[], block: Holder<Block>, properties: Property<any>[])
    // private block: Holder<Block>;
    // private properties: Property<any>[];
    codec(): MapCodec<CopyBlockState>;
    getReferencedContextParams(): ContextKey<Object>[];
    run(itemStack: ItemStack, context: LootContext): ItemStack;
}