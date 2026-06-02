import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { NormalizedPlane } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/NormalizedPlane.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class NormalizedPlane$Companion extends Object {
    fromParams(base: Vec3, directionA: Vec3, directionB: Vec3): NormalizedPlane;
    fromPoints(a: Vec3, b: Vec3, c: Vec3): NormalizedPlane;
}