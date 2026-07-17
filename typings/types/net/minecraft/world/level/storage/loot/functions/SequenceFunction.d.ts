import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BiFunction } from '../../../../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
export class SequenceFunction extends Object implements LootItemFunction {
    static INLINE_CODEC: Codec<SequenceFunction>;
    static MAP_CODEC: MapCodec<SequenceFunction>;
    static of(paramfunctions: LootItemFunction[]): SequenceFunction;
    private constructor(functions: LootItemFunction[])
    // private compositeFunction: (param0: ItemStack, param1: LootContext) => ItemStack;
    // private functions: LootItemFunction[];
    apply(stack: ItemStack, context: LootContext): ItemStack;
    codec(): MapCodec<SequenceFunction>;
    validate(output: ValidationContext): void;
}