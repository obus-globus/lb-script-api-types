import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class AutoFarmVisualizer$Path extends ToggleableValueGroup {
    static INSTANCE: AutoFarmVisualizer$Path;
    readonly color: Color4b;
    getColor(): Color4b;
    // private renderHandler: EventHook<WorldRenderEvent>;
    readonly running: boolean;
}