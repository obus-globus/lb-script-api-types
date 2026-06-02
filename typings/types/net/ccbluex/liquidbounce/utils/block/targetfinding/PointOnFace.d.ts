import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AlignedFace } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PointOnFace extends Object {
    constructor(face: AlignedFace, side: Direction, point: Vec3)
    readonly face: AlignedFace;
    readonly point: Vec3;
    readonly side: Direction;
}