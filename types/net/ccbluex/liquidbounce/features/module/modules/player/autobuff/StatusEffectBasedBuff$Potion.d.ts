import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { StatusEffectBasedBuff } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/StatusEffectBasedBuff.d.ts'
import type { Holder } from '../../../../../../../../net/minecraft/core/Holder.d.ts'
import type { MobEffect } from '../../../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { MobEffectInstance } from '../../../../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
export class StatusEffectBasedBuff$Potion extends ToggleableValueGroup {
    constructor(parent: StatusEffectBasedBuff, name: string, statusEffect: Holder<MobEffect>)
    readonly statusEffect: Holder<MobEffect>;
    isValid(effect: MobEffectInstance, health: number): boolean;
}