import type { CurveValue } from '../../../../../../../net/ccbluex/liquidbounce/config/types/CurveValue.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BedStateChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/BedStateChangeEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { OverlayRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleBedPlates$BedStateRenderState } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleBedPlates$BedStateRenderState.d.ts'
import type { ModuleBedPlates$FilterMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleBedPlates$FilterMode.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { BedBlockTracker$Subscriber } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/bed/BedBlockTracker$Subscriber.d.ts'
import type { IsSelfBedMode } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/bed/IsSelfBedMode.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ModuleBedPlates extends ClientModule implements BedBlockTracker$Subscriber {
    static INSTANCE: ModuleBedPlates;
    // private ROMAN_NUMERALS: string[];
    // private backgroundColor: Color4b;
    // private /*not mapped: */ getBackgroundColor(): Color4b;
    // private bedStateChangeHandler: EventHook<BedStateChangeEvent>;
    // private beds: ModuleBedPlates$BedStateRenderState[];
    // private compact: boolean;
    // private /*not mapped: */ getCompact(): boolean;
    // private filterMode: ModeValueGroup<ModuleBedPlates$FilterMode>;
    // private highlightUnbreakable: boolean;
    // private /*not mapped: */ getHighlightUnbreakable(): boolean;
    // private ignoreAdjacent: boolean;
    // private /*not mapped: */ getIgnoreAdjacent(): boolean;
    // private ignoreSelfBed: ModeValueGroup<IsSelfBedMode>;
    // private maxCount: number;
    // private /*not mapped: */ getMaxCount(): number;
    readonly maxLayers: number;
    // private outline: boolean;
    // private /*not mapped: */ getOutline(): boolean;
    // private preventOverlap: boolean;
    // private /*not mapped: */ getPreventOverlap(): boolean;
    // private renderHandler: EventHook<OverlayRenderEvent>;
    // private renderOffset: Vec3;
    // private /*not mapped: */ getRenderOffset(): Vec3;
    // private scale: CurveValue;
    // private showBed: boolean;
    // private /*not mapped: */ getShowBed(): boolean;
    // private textShadow: boolean;
    // private /*not mapped: */ getTextShadow(): boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    onDisabled(): void;
    onEnabled(): void;
    // private updateAndSortBeds(): void;
}