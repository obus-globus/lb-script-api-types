import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Line } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { LinearGeometry3 } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.d.ts'
import type { NormalizedPlane$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/NormalizedPlane$Companion.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class NormalizedPlane extends Object {
    static Companion: NormalizedPlane$Companion;
    static fromParams(paramarg0: Vec3, paramarg1: Vec3, paramarg2: Vec3): NormalizedPlane;
    static fromPoints(paramarg0: Vec3, paramarg1: Vec3, paramarg2: Vec3): NormalizedPlane;
    constructor(pos: Vec3, normalVec: Vec3)
    readonly normalVec: Vec3;
    readonly pos: Vec3;
    intersection(geometry: LinearGeometry3): Vec3 | null;
    intersection(other: NormalizedPlane): Line | null;
    intersectionPhi(geometry: LinearGeometry3): number | null;
}