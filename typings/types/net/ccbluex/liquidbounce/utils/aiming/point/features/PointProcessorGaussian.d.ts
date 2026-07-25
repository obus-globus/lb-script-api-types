import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { PercentageChance } from '../../../../../../../net/ccbluex/liquidbounce/config/utils/PercentageChance.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { PointInsideBox } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/PointInsideBox.d.ts'
import type { PointProcessor } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessor.d.ts'
import type { PointProcessorGaussian$Companion } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessorGaussian$Companion.d.ts'
import type { PointProcessorGaussian$Dynamic } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessorGaussian$Dynamic.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PointProcessorGaussian extends PointProcessor {
    static Companion: PointProcessorGaussian$Companion;
    constructor(parent: EventListener)
    // private chance: PercentageChance<number>;
    // private currentOffset: Vec3;
    // private dynamic: PointProcessorGaussian$Dynamic;
    // private pitchFactor: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getPitchFactor(): ClosedFloatingPointRange<number>;
    // private speed: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getSpeed(): ClosedFloatingPointRange<number>;
    // private targetOffset: Vec3;
    // private tolerance: number;
    // private /*not mapped: */ getTolerance(): number;
    // private yawFactor: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getYawFactor(): ClosedFloatingPointRange<number>;
    process(point: PointInsideBox): PointInsideBox;
    updateGaussianOffset(entity: Object | null): void;
}