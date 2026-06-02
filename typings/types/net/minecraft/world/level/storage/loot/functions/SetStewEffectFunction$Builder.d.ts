import type { ImmutableList$Builder } from '../../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { MobEffect } from '../../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { SetStewEffectFunction$EffectEntry } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/SetStewEffectFunction$EffectEntry.d.ts'
import type { NumberProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class SetStewEffectFunction$Builder extends LootItemConditionalFunction$Builder<SetStewEffectFunction$Builder> {
    constructor()
    // private effects: ImmutableList$Builder<SetStewEffectFunction$EffectEntry>;
    build(): LootItemFunction;
    getThis(): SetStewEffectFunction$Builder;
    withEffect(effect: Holder<MobEffect>, duration: NumberProvider): SetStewEffectFunction$Builder;
}