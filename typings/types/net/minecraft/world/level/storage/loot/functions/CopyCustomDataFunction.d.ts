import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootContext$EntityTarget } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext$EntityTarget.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { CopyCustomDataFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/CopyCustomDataFunction$Builder.d.ts'
import type { CopyCustomDataFunction$CopyOperation } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/CopyCustomDataFunction$CopyOperation.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { NbtProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/nbt/NbtProvider.d.ts'
export class CopyCustomDataFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<CopyCustomDataFunction>;
    static copyData(paramsource: LootContext$EntityTarget): CopyCustomDataFunction$Builder;
    static copyData(paramsource: NbtProvider): CopyCustomDataFunction$Builder;
    private constructor(predicates: LootItemCondition[], source: NbtProvider, operations: CopyCustomDataFunction$CopyOperation[])
    // private operations: CopyCustomDataFunction$CopyOperation[];
    // private source: NbtProvider;
    codec(): MapCodec<CopyCustomDataFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
    validate(context: ValidationContext): void;
}