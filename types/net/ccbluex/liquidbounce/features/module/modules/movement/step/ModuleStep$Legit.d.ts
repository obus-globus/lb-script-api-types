import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AllowAutoJumpEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/AllowAutoJumpEvent.d.ts'
export class ModuleStep$Legit extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleStep$Legit;
    // private autoJumpHandler: EventHook<AllowAutoJumpEvent>;
    readonly parent: ModeValueGroup<Mode>;
}