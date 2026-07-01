import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { OverlayRenderEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { TimeUnit } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/TimeUnit.d.ts'
import type { TrajectoryDetailedInfoRenderer$ShowAt } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/trajectories/TrajectoryDetailedInfoRenderer$ShowAt.d.ts'
import type { FontRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontRenderer.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TrajectoryDetailedInfoRenderer extends ToggleableValueGroup {
    static INSTANCE: TrajectoryDetailedInfoRenderer;
    // private color: Color4b;
    // private /*not mapped: */ getColor(): Color4b;
    // private distance: boolean;
    // private /*not mapped: */ getDistance(): boolean;
    // private /*not mapped: */ getFontRenderer(): FontRenderer;
    // private item: boolean;
    // private /*not mapped: */ getItem(): boolean;
    // private ownerName: boolean;
    // private /*not mapped: */ getOwnerName(): boolean;
    readonly renderHandler: EventHook<OverlayRenderEvent>;
    // private renderOffset: Vec3;
    // private /*not mapped: */ getRenderOffset(): Vec3;
    // private scale: number;
    // private /*not mapped: */ getScale(): number;
    // private showAt: TrajectoryDetailedInfoRenderer$ShowAt;
    // private /*not mapped: */ getShowAt(): TrajectoryDetailedInfoRenderer$ShowAt;
    // private timeUnit: TimeUnit;
    // private /*not mapped: */ getTimeUnit(): TimeUnit;
}