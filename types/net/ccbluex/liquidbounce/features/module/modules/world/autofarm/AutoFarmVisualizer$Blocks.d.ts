import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { WorldRenderEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { AutoFarmTrackedState$Plantable } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmTrackedState$Plantable.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class AutoFarmVisualizer$Blocks extends ToggleableValueGroup {
    static INSTANCE: AutoFarmVisualizer$Blocks;
    // private colorRainbow: boolean;
    // private /*not mapped: */ getColorRainbow(): boolean;
    readonly outline: boolean;
    // private placeColor: Color4b;
    // private /*not mapped: */ getPlaceColor(): Color4b;
    // private placeTargets: AutoFarmTrackedState$Plantable[];
    // private /*not mapped: */ getPlaceTargets(): AutoFarmTrackedState$Plantable[];
    // private range: number;
    // private /*not mapped: */ getRange(): number;
    // private readyColor: Color4b;
    // private /*not mapped: */ getReadyColor(): Color4b;
    // private renderHandler: EventHook<WorldRenderEvent>;
}