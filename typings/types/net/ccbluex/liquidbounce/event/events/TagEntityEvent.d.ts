import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { EntityTargetingInfo } from '../../../../../net/ccbluex/liquidbounce/utils/combat/EntityTargetingInfo.d.ts'
import type { Priority } from '../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
import type { PriorityField } from '../../../../../net/ccbluex/liquidbounce/utils/kotlin/PriorityField.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class TagEntityEvent extends Event {
    constructor(entity: Entity, targetingInfo: EntityTargetingInfo)
    readonly color: PriorityField<Color4b>;
    readonly entity: Entity;
    targetingInfo: EntityTargetingInfo;
    assumeFriend(): void;
    color(col: Color4b, priority: Priority): void;
    /**
     * Don't start combat this target
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/events/EntityEvents.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/EntityEvents.kt:48}
     */
    dontTarget(): void;
    /**
     * Fully ignore that target
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/event/events/EntityEvents.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/EntityEvents.kt:57}
     */
    ignore(): void;
}