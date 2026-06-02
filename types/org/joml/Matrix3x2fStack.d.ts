import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix3x2f } from '../../org/joml/Matrix3x2f.d.ts'
export class Matrix3x2fStack extends Matrix3x2f {
    constructor()
    constructor(arg0: number)
    // private curr: number;
    // private mats: Matrix3x2f[];
    clear(): Matrix3x2fStack;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    popMatrix(): Matrix3x2fStack;
    pushMatrix(): Matrix3x2fStack;
    readExternal(arg0: ObjectInput): void;
    writeExternal(arg0: ObjectOutput): void;
}