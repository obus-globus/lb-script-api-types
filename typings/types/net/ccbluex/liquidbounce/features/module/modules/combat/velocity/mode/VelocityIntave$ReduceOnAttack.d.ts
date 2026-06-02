import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
export class VelocityIntave$ReduceOnAttack extends ToggleableValueGroup {
    constructor(parent: EventListener | null)
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private hurtTime: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getHurtTime(): { start: number; endInclusive: number; step: number };
    lastAttackTime: number;
    // private lastAttackTimeToReduce: number;
    // private /*not mapped: */ getLastAttackTimeToReduce(): number;
    // private reduceFactor: number;
    // private /*not mapped: */ getReduceFactor(): number;
}