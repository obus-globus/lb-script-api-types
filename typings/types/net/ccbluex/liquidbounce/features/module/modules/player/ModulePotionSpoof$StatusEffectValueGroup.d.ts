import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Value } from '../../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { MobEffect } from '../../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { MobEffectInstance } from '../../../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
export class ModulePotionSpoof$StatusEffectValueGroup extends ToggleableValueGroup {
    constructor(registryEntry: Holder<MobEffect>, specifiedLanguage: JavaMap<string, string>)
    readonly instance: MobEffectInstance;
    // private level: Value<number>;
    readonly registryEntry: Holder<MobEffect>;
}