import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { SpellcasterIllager } from '../../../../../../net/minecraft/world/entity/monster/illager/SpellcasterIllager.d.ts'
export class SpellcasterIllager$SpellcasterCastingSpellGoal extends Goal {
    constructor(null_: SpellcasterIllager)
    canUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}