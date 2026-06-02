import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LeastDifferencePreference } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/preference/LeastDifferencePreference.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class LeastDifferencePreference$Companion extends Object {
    leastDifferenceToCurrentRotation(): LeastDifferencePreference;
    leastDifferenceToLastPoint(eyes: Vec3, point: Vec3): LeastDifferencePreference;
}