import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Line } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { LinearGeometry3 } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.d.ts'
import type { NormalizedPlane$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/NormalizedPlane$Companion.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class NormalizedPlane extends Object {
    static Companion: NormalizedPlane$Companion;
    static fromParams(base: Vec3, directionA: Vec3, directionB: Vec3): NormalizedPlane;
    static fromPoints(a: Vec3, b: Vec3, c: Vec3): NormalizedPlane;
    constructor(pos: Vec3, normalVec: Vec3)
    readonly normalVec: Vec3;
    readonly pos: Vec3;
    intersection(geometry: LinearGeometry3): Vec3 | null;
    intersection(other: NormalizedPlane): Line | null;
    intersectionPhi(geometry: LinearGeometry3): number | null;
}