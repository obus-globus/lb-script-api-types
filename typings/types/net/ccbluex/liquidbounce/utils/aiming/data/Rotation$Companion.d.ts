import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Rotation$Companion extends Object {
    ZERO: Rotation;
    fromRotationVec(diffX: number, diffY: number, diffZ: number): Rotation;
    fromRotationVec(lookVec: Vec3): Rotation;
    lookingAt(point: Vec3, from: Vec3): Rotation;
}