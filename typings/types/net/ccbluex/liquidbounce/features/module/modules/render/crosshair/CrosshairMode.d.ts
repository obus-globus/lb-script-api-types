import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { OverlayRenderEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
export abstract class CrosshairMode extends Mode {
    static Companion: Tagged$Companion;
    constructor(name: string)
    // private cursorHandler: EventHook<OverlayRenderEvent>;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    // private showInThirdPerson: boolean;
    // private /*not mapped: */ getShowInThirdPerson(): boolean;
}