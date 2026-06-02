import type { StatusEffectBasedBuff } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/StatusEffectBasedBuff.d.ts'
import type { StatusEffectBasedBuff$Potion } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/StatusEffectBasedBuff$Potion.d.ts'
import type { Holder } from '../../../../../../../../net/minecraft/core/Holder.d.ts'
import type { MobEffect } from '../../../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { MobEffectInstance } from '../../../../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
export class StatusEffectBasedBuff$HealthBasedPotion extends StatusEffectBasedBuff$Potion {
    constructor(parent: StatusEffectBasedBuff, name: string, statusEffect: Holder<MobEffect>)
    // private /*not mapped: */ getHealth(): number;
    // private healthPercent: number;
    // private /*not mapped: */ getHealthPercent(): number;
    isValid(effect: MobEffectInstance, health: number): boolean;
}