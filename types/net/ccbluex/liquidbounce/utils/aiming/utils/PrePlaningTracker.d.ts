import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationWithVector } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/RotationWithVector.d.ts'
import type { BestRotationTracker } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/utils/BestRotationTracker.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PrePlaningTracker extends BestRotationTracker {
    constructor(comparator: (param0: Rotation) => kotlin.Boolean, eyes: Vec3, futureTarget: AABB, ignoreVisibility: boolean)
    // private eyes: Vec3;
    // private futureTarget: AABB;
    getIsRotationBetter(base: RotationWithVector | null, newRotation: RotationWithVector, visible: boolean): boolean;
}