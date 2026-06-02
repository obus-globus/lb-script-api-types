import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix4x3f } from '../../org/joml/Matrix4x3f.d.ts'
export class Matrix4x3fStack extends Matrix4x3f {
    static PLANE_NX: number;
    static PLANE_NY: number;
    static PLANE_NZ: number;
    static PLANE_PX: number;
    static PLANE_PY: number;
    static PLANE_PZ: number;
    static PROPERTY_IDENTITY: number;
    static PROPERTY_ORTHONORMAL: number;
    static PROPERTY_TRANSLATION: number;
    static PROPERTY_UNKNOWN: number;
    constructor()
    constructor(arg0: number)
    // private curr: number;
    // private mats: Matrix4x3f[];
    clear(): Matrix4x3fStack;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    popMatrix(): Matrix4x3fStack;
    pushMatrix(): Matrix4x3fStack;
    readExternal(arg0: ObjectInput): void;
    writeExternal(arg0: ObjectOutput): void;
}