import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { SpellcasterIllager } from '../../../../../../net/minecraft/world/entity/monster/illager/SpellcasterIllager.d.ts'
import type { SpellcasterIllager$IllagerSpell } from '../../../../../../net/minecraft/world/entity/monster/illager/SpellcasterIllager$IllagerSpell.d.ts'
export abstract class SpellcasterIllager$SpellcasterUseSpellGoal extends Goal {
    constructor(null_: SpellcasterIllager)
    // private attackWarmupDelay: number;
    // private nextAttackTickCount: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    getCastWarmupTime(): number;
    getCastingInterval(): number;
    getCastingTime(): number;
    getSpell(): SpellcasterIllager$IllagerSpell;
    getSpellPrepareSound(): SoundEvent;
    performSpellCasting(): void;
    start(): void;
    tick(): void;
}