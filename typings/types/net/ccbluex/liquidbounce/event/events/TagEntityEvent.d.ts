import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { EntityTargetingInfo } from '../../../../../net/ccbluex/liquidbounce/utils/combat/EntityTargetingInfo.d.ts'
import type { Priority } from '../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
import type { PriorityField } from '../../../../../net/ccbluex/liquidbounce/utils/kotlin/PriorityField.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * Fires to classify an entity for targeting (target / friend / ignored, etc.), exposing the entity and its mutable targeting info.
 */
export class TagEntityEvent extends Event {
    constructor(entity: Entity, targetingInfo: EntityTargetingInfo)
    readonly entity: Entity;
    targetingInfo: EntityTargetingInfo;
    assumeFriend(): void;
    color(col: Color4b, priority: Priority): void;
    /**
     * Don't start combat this target
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/event/events/EntityEvents.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/EntityEvents.kt:51}
     */
    dontTarget(): void;
    /**
     * Fully ignore that target
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/event/events/EntityEvents.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/event/events/EntityEvents.kt:60}
     */
    ignore(): void;
}