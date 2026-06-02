import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ModuleDerp$YawMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/fun/ModuleDerp$YawMode.d.ts'
export class ModuleDerp$YawSpin extends ModuleDerp$YawMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleDerp$YawSpin;
    readonly repeatable: EventHook<GameTickEvent>;
    yaw: number;
    readonly yawSpinSpeed: number;
}