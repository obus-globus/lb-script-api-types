import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix3f } from '../../org/joml/Matrix3f.d.ts'
export class Matrix3fStack extends Matrix3f {
    constructor()
    constructor(arg0: number)
    // private curr: number;
    // private mats: Matrix3f[];
    clear(): Matrix3fStack;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    popMatrix(): Matrix3fStack;
    pushMatrix(): Matrix3fStack;
    readExternal(arg0: ObjectInput): void;
    writeExternal(arg0: ObjectOutput): void;
}