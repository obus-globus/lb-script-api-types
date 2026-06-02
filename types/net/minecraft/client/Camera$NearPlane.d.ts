import type { Object } from '../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../net/minecraft/world/phys/Vec3.d.ts'
export class Camera$NearPlane extends Object {
    private constructor(forward: Vec3, left: Vec3, up: Vec3)
    // private forward: Vec3;
    // private left: Vec3;
    // private up: Vec3;
    getBottomLeft(): Vec3;
    getBottomRight(): Vec3;
    getPointOnPlane(x: number, y: number): Vec3;
    getTopLeft(): Vec3;
    getTopRight(): Vec3;
}