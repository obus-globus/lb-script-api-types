import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { TargetingConditions } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { Evoker } from '../../../../../../net/minecraft/world/entity/monster/illager/Evoker.d.ts'
import type { SpellcasterIllager$IllagerSpell } from '../../../../../../net/minecraft/world/entity/monster/illager/SpellcasterIllager$IllagerSpell.d.ts'
import type { SpellcasterIllager$SpellcasterUseSpellGoal } from '../../../../../../net/minecraft/world/entity/monster/illager/SpellcasterIllager$SpellcasterUseSpellGoal.d.ts'
export class Evoker$EvokerWololoSpellGoal extends SpellcasterIllager$SpellcasterUseSpellGoal {
    constructor(null_: Evoker)
    // private wololoTargeting: TargetingConditions;
    canContinueToUse(): boolean;
    canUse(): boolean;
    getCastWarmupTime(): number;
    getCastingInterval(): number;
    getCastingTime(): number;
    getSpell(): SpellcasterIllager$IllagerSpell;
    getSpellPrepareSound(): SoundEvent;
    performSpellCasting(): void;
    stop(): void;
}