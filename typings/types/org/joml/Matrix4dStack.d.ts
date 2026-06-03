import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix4d } from '../../org/joml/Matrix4d.d.ts'
import type { Matrix4dc } from '../../org/joml/Matrix4dc.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
export class Matrix4dStack extends Matrix4d {
    static CORNER_NXNYNZ: number;
    static CORNER_NXNYPZ: number;
    static CORNER_NXPYNZ: number;
    static CORNER_NXPYPZ: number;
    static CORNER_PXNYNZ: number;
    static CORNER_PXNYPZ: number;
    static CORNER_PXPYNZ: number;
    static CORNER_PXPYPZ: number;
    static PLANE_NX: number;
    static PLANE_NY: number;
    static PLANE_NZ: number;
    static PLANE_PX: number;
    static PLANE_PY: number;
    static PLANE_PZ: number;
    static PROPERTY_AFFINE: number;
    static PROPERTY_IDENTITY: number;
    static PROPERTY_ORTHONORMAL: number;
    static PROPERTY_PERSPECTIVE: number;
    static PROPERTY_TRANSLATION: number;
    static PROPERTY_UNKNOWN: number;
    static perspectiveOffCenterViewFromRectangle(paramarg0: Vector3d, paramarg1: Vector3d, paramarg2: Vector3d, paramarg3: Vector3d, paramarg4: number, paramarg5: boolean, paramarg6: Matrix4d, paramarg7: Matrix4d): void;
    constructor()
    constructor(arg0: number)
    // private curr: number;
    // private mats: Matrix4d[];
    clear(): Matrix4dStack;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    equals(arg0: Matrix4dc, arg1: number): boolean;
    hashCode(): number;
    popMatrix(): Matrix4dStack;
    pushMatrix(): Matrix4dStack;
    readExternal(arg0: ObjectInput): void;
    writeExternal(arg0: ObjectOutput): void;
}