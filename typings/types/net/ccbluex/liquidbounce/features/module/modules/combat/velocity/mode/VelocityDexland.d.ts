import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { VelocityMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityMode.d.ts'
export class VelocityDexland extends VelocityMode {
    static Companion: Tagged$Companion;
    static INSTANCE: VelocityDexland;
    // private attackHandler: EventHook<AttackEntityEvent>;
    count: number;
    // private hReduce: number;
    // private /*not mapped: */ getHReduce(): number;
    // private lastAttackTime: number;
    // private times: number;
    // private /*not mapped: */ getTimes(): number;
}