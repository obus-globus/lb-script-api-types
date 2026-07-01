import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { OverlayRenderEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
import type { TargetTracker } from '../../../../../net/ccbluex/liquidbounce/utils/combat/TargetTracker.d.ts'
import type { TargetRenderAppearance } from '../../../../../net/ccbluex/liquidbounce/utils/render/TargetRenderAppearance.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * A target tracker to choose the best enemy to attack
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/utils/render/TargetRenderer.kt#L82 | src/main/kotlin/net/ccbluex/liquidbounce/utils/render/TargetRenderer.kt:82}
 */
export class TargetRenderer extends ToggleableValueGroup {
    constructor(owner: ToggleableValueGroup, target: () => Entity | null)
    constructor(module: ToggleableValueGroup, targetTracker: TargetTracker)
    // private appearance: ModeValueGroup<TargetRenderAppearance<Object>>;
    // private guiRenderHandler: EventHook<OverlayRenderEvent>;
    readonly target: () => Entity | null;
    // private worldRenderHandler: EventHook<WorldRenderEvent>;
}