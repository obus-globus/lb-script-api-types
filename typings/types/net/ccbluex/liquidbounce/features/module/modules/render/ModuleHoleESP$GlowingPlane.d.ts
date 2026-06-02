import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
export class ModuleHoleESP$GlowingPlane extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleHoleESP$GlowingPlane;
    // private glowHeightSetting: number;
    // private /*not mapped: */ getGlowHeightSetting(): number;
    // private outline: boolean;
    // private /*not mapped: */ getOutline(): boolean;
    readonly parent: ModeValueGroup<Mode>;
    readonly renderHandler: EventHook<WorldRenderEvent>;
}