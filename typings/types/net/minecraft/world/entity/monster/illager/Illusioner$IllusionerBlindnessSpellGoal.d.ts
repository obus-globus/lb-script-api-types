import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SpellcasterIllager$IllagerSpell } from '../../../../../../net/minecraft/world/entity/monster/illager/SpellcasterIllager$IllagerSpell.d.ts'
import type { SpellcasterIllager$SpellcasterUseSpellGoal } from '../../../../../../net/minecraft/world/entity/monster/illager/SpellcasterIllager$SpellcasterUseSpellGoal.d.ts'
export class Illusioner$IllusionerBlindnessSpellGoal extends SpellcasterIllager$SpellcasterUseSpellGoal {
    private constructor(null_: Illusioner$IllusionerBlindnessSpellGoal)
    // private lastTargetId: number;
    canUse(): boolean;
    getCastingInterval(): number;
    getCastingTime(): number;
    getSpell(): SpellcasterIllager$IllagerSpell;
    getSpellPrepareSound(): SoundEvent;
    performSpellCasting(): void;
    start(): void;
}