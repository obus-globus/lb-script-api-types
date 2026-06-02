import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { SprintEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/SprintEvent.d.ts'
import type { ModuleCriticals$WhenSprinting$StopSprintingMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals$WhenSprinting$StopSprintingMode.d.ts'
export class ModuleCriticals$WhenSprinting extends ToggleableValueGroup {
    static INSTANCE: ModuleCriticals$WhenSprinting;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private enemyInRange: number;
    // private /*not mapped: */ getEnemyInRange(): number;
    readonly running: boolean;
    // private sprintHandler: EventHook<SprintEvent>;
    readonly stopSprinting: ModuleCriticals$WhenSprinting$StopSprintingMode;
    shouldAttemptCritWhileSprinting(): boolean;
}