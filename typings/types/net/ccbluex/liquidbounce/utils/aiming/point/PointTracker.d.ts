import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { PointInsideBox } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/PointInsideBox.d.ts'
import type { ExemptBestHitVector } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/exempts/ExemptBestHitVector.d.ts'
import type { ExemptBoxPart } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/exempts/ExemptBoxPart.d.ts'
import type { PointProcessor } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessor.d.ts'
import type { PointProcessorDelay } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessorDelay.d.ts'
import type { PointProcessorGaussian } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessorGaussian.d.ts'
import type { PointProcessorLazy } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessorLazy.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PointTracker extends ValueGroup implements EventListener {
    constructor(parent: EventListener)
    // private delay: PointProcessorDelay;
    // private gaussian: PointProcessorGaussian;
    // private lazy: PointProcessorLazy;
    // private predicateBestHitVector: ExemptBestHitVector;
    // private predicateBoxParts: ExemptBoxPart[];
    // private /*not mapped: */ getPredicateBoxParts(): ExemptBoxPart[];
    // private processors: PointProcessor[];
    // private calculateDistancePercentage(point: Vec3, eyes: Vec3, bestHitVector: Vec3, worstHitVector: Vec3): number;
    children(): EventListener[];
    // private farthestAxis(value: number, min: number, max: number): number;
    /**
     * The point tracker is being used to track a certain point of an entity.
     *
     * @param entity The entity we want to track.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/point/PointTracker.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/point/PointTracker.kt:71}
     */
    findPoint(eyes: Vec3, entity: Entity, ticks: number): PointInsideBox;
    parent(): EventListener | null;
    parent(): EventListener;
    unregister(): void;
}