import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ScheduleInventoryActionEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Buff } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/Buff.d.ts'
export class ModuleAutoBuff extends ClientModule {
    static INSTANCE: ModuleAutoBuff;
    /*not mapped: */ getActiveFeatures$net_ccbluex_liquidbounce(): Buff[];
    // private combatPauseTime: number;
    /*not mapped: */ getCombatPauseTime$net_ccbluex_liquidbounce(): number;
    // private features: Buff[];
    // private notDuringCombat: boolean;
    // private /*not mapped: */ getNotDuringCombat(): boolean;
    // private refiller: EventHook<ScheduleInventoryActionEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
    onDisabled(): void;
}