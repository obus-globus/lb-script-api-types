import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix3d } from '../../org/joml/Matrix3d.d.ts'
export class Matrix3dStack extends Matrix3d {
    constructor()
    constructor(arg0: number)
    // private curr: number;
    // private mats: Matrix3d[];
    clear(): Matrix3dStack;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    popMatrix(): Matrix3dStack;
    pushMatrix(): Matrix3dStack;
    readExternal(arg0: ObjectInput): void;
    writeExternal(arg0: ObjectOutput): void;
}