import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vec3f } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/Vec3f.d.ts'
import type { Camera } from '../../../../../../net/minecraft/client/Camera.d.ts'
export class Vec3f$Companion extends Object {
    X_AXIS: Vec3f;
    Y_AXIS: Vec3f;
    ZERO: Vec3f;
    Z_AXIS: Vec3f;
    eyeVector(camera: Camera): Vec3f;
}