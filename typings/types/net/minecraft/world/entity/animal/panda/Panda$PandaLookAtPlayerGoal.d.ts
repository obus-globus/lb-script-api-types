import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { LookAtPlayerGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/LookAtPlayerGoal.d.ts'
import type { Panda } from '../../../../../../net/minecraft/world/entity/animal/panda/Panda.d.ts'
export class Panda$PandaLookAtPlayerGoal extends LookAtPlayerGoal {
    static DEFAULT_PROBABILITY: number;
    constructor(mob: Panda, lookAtType: Class<LivingEntity>, lookDistance: number)
    // private panda: Panda;
    canContinueToUse(): boolean;
    canUse(): boolean;
    setTarget(entity: LivingEntity): void;
    tick(): void;
}