import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { LeastDifferencePreference$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/preference/LeastDifferencePreference$Companion.d.ts'
import type { RotationPreference } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/preference/RotationPreference.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LeastDifferencePreference extends Object implements RotationPreference {
    static Companion: LeastDifferencePreference$Companion;
    static leastDifferenceToCurrentRotation(): LeastDifferencePreference;
    static leastDifferenceToLastPoint(paramarg0: Vec3, paramarg1: Vec3): LeastDifferencePreference;
    constructor(baseRotation: Rotation, basePoint: Vec3 | null)
    // private basePoint: Vec3 | null;
    // private baseRotation: Rotation;
    compare(o1: Rotation, o2: Rotation): number;
    getPreferredSpot(eyesPos: Vec3, range: number): Vec3;
    getPreferredSpotOnBox(box: AABB, eyesPos: Vec3, range: number): Vec3;
    getPreferredSpotOnBox(box: AABB, eyesPos: Vec3, range: number): Vec3;
}