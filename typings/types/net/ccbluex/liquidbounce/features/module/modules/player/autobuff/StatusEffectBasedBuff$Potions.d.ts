import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { StatusEffectBasedBuff } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/StatusEffectBasedBuff.d.ts'
import type { StatusEffectBasedBuff$HealthBasedPotion } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/StatusEffectBasedBuff$HealthBasedPotion.d.ts'
import type { StatusEffectBasedBuff$Potion } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/StatusEffectBasedBuff$Potion.d.ts'
import type { Holder } from '../../../../../../../../net/minecraft/core/Holder.d.ts'
import type { MobEffect } from '../../../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
export class StatusEffectBasedBuff$Potions extends ValueGroup {
    constructor(parent: StatusEffectBasedBuff)
    // private fireResistancePotion: StatusEffectBasedBuff$Potion;
    // private healthPotion: StatusEffectBasedBuff$HealthBasedPotion;
    // private jumpBoostPotion: StatusEffectBasedBuff$Potion;
    // private regenPotion: StatusEffectBasedBuff$HealthBasedPotion;
    // private speedPotion: StatusEffectBasedBuff$Potion;
    // private strengthPotion: StatusEffectBasedBuff$Potion;
    // private values: JavaMap<Holder<MobEffect>, StatusEffectBasedBuff$Potion>;
    // private waterBreathingPotion: StatusEffectBasedBuff$Potion;
    get(): Value<Object>[];
    get(statusEffect: Holder<MobEffect>): StatusEffectBasedBuff$Potion | null;
}