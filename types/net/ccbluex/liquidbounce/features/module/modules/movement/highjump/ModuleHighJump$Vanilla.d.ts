import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
export class ModuleHighJump$Vanilla extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleHighJump$Vanilla;
    readonly jumpEvent: EventHook<PlayerJumpEvent>;
    readonly parent: ModeValueGroup<Mode>;
}