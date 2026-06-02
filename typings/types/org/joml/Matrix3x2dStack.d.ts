import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Matrix3x2d } from '../../org/joml/Matrix3x2d.d.ts'
export class Matrix3x2dStack extends Matrix3x2d implements Cloneable {
    constructor()
    constructor(arg0: number)
    // private curr: number;
    // private mats: Matrix3x2d[];
    clear(): Matrix3x2dStack;
    protected clone(): Object;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    popMatrix(): Matrix3x2dStack;
    pushMatrix(): Matrix3x2dStack;
    readExternal(arg0: ObjectInput): void;
    writeExternal(arg0: ObjectOutput): void;
}