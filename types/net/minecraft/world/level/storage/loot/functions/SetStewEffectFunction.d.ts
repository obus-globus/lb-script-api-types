import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { SetStewEffectFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/SetStewEffectFunction$Builder.d.ts'
import type { SetStewEffectFunction$EffectEntry } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/SetStewEffectFunction$EffectEntry.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class SetStewEffectFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetStewEffectFunction>;
    static stewEffect(): SetStewEffectFunction$Builder;
    private constructor(predicates: LootItemCondition[], effects: SetStewEffectFunction$EffectEntry[])
    // private effects: SetStewEffectFunction$EffectEntry[];
    codec(): MapCodec<SetStewEffectFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
    validate(context: ValidationContext): void;
}