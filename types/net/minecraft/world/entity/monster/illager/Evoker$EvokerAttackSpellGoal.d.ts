import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SpellcasterIllager$IllagerSpell } from '../../../../../../net/minecraft/world/entity/monster/illager/SpellcasterIllager$IllagerSpell.d.ts'
import type { SpellcasterIllager$SpellcasterUseSpellGoal } from '../../../../../../net/minecraft/world/entity/monster/illager/SpellcasterIllager$SpellcasterUseSpellGoal.d.ts'
export class Evoker$EvokerAttackSpellGoal extends SpellcasterIllager$SpellcasterUseSpellGoal {
    private constructor(null_: Evoker$EvokerAttackSpellGoal)
    // private createSpellEntity(x: number, z: number, minY: number, maxY: number, angle: number, delayTicks: number): void;
    getCastingInterval(): number;
    getCastingTime(): number;
    getSpell(): SpellcasterIllager$IllagerSpell;
    getSpellPrepareSound(): SoundEvent;
    performSpellCasting(): void;
}