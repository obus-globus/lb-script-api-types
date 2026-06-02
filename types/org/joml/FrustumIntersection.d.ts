import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Vector2fc } from '../../org/joml/Vector2fc.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
export class FrustumIntersection extends Object {
    static INSIDE: number;
    static INTERSECT: number;
    static OUTSIDE: number;
    static PLANE_MASK_NX: number;
    static PLANE_MASK_NY: number;
    static PLANE_MASK_NZ: number;
    static PLANE_MASK_PX: number;
    static PLANE_MASK_PY: number;
    static PLANE_MASK_PZ: number;
    static PLANE_NX: number;
    static PLANE_NY: number;
    static PLANE_NZ: number;
    static PLANE_PX: number;
    static PLANE_PY: number;
    static PLANE_PZ: number;
    constructor()
    constructor(arg0: Matrix4fc)
    constructor(arg0: Matrix4fc, arg1: boolean)
    // private nxW: number;
    // private nxX: number;
    // private nxY: number;
    // private nxZ: number;
    // private nyW: number;
    // private nyX: number;
    // private nyY: number;
    // private nyZ: number;
    // private nzW: number;
    // private nzX: number;
    // private nzY: number;
    // private nzZ: number;
    // private planes: Vector4f[];
    // private pxW: number;
    // private pxX: number;
    // private pxY: number;
    // private pxZ: number;
    // private pyW: number;
    // private pyX: number;
    // private pyY: number;
    // private pyZ: number;
    // private pzW: number;
    // private pzX: number;
    // private pzY: number;
    // private pzZ: number;
    distanceToPlane(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): number;
    intersectAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
    intersectAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): number;
    intersectAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
    intersectAab(arg0: Vector3fc, arg1: Vector3fc): number;
    intersectAab(arg0: Vector3fc, arg1: Vector3fc, arg2: number): number;
    intersectAab(arg0: Vector3fc, arg1: Vector3fc, arg2: number, arg3: number): number;
    intersectSphere(arg0: number, arg1: number, arg2: number, arg3: number): number;
    intersectSphere(arg0: Vector3fc, arg1: number): number;
    set(arg0: Matrix4fc): FrustumIntersection;
    set(arg0: Matrix4fc, arg1: boolean): FrustumIntersection;
    testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    testAab(arg0: Vector3fc, arg1: Vector3fc): boolean;
    testLineSegment(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    testLineSegment(arg0: Vector3fc, arg1: Vector3fc): boolean;
    testPlaneXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    testPlaneXY(arg0: Vector2fc, arg1: Vector2fc): boolean;
    testPlaneXZ(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    testPoint(arg0: number, arg1: number, arg2: number): boolean;
    testPoint(arg0: Vector3fc): boolean;
    testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    testSphere(arg0: Vector3fc, arg1: number): boolean;
}