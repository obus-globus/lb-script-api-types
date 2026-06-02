import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerPostTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerPostTickEvent.d.ts'
export class ModuleFullBright$FullBrightNightVision extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleFullBright$FullBrightNightVision;
    readonly parent: ModeValueGroup<Mode>;
    readonly tickHandler: EventHook<PlayerPostTickEvent>;
    disable(): void;
}