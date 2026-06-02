import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../org/joml/Vector3fc.d.ts'
export class FrustumRayBuilder extends Object {
    constructor()
    constructor(arg0: Matrix4fc)
    // private cx: number;
    // private cy: number;
    // private cz: number;
    // private nxnyX: number;
    // private nxnyY: number;
    // private nxnyZ: number;
    // private nxpyX: number;
    // private nxpyY: number;
    // private nxpyZ: number;
    // private pxnyX: number;
    // private pxnyY: number;
    // private pxnyZ: number;
    // private pxpyX: number;
    // private pxpyY: number;
    // private pxpyZ: number;
    dir(arg0: number, arg1: number, arg2: Vector3f): Vector3fc;
    origin(arg0: Vector3f): Vector3fc;
    set(arg0: Matrix4fc): FrustumRayBuilder;
}