import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Matrix4f } from '../../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
export class MatrixUniforms$Previous extends Object implements Supplier<Matrix4fc> {
    constructor(arg0: () => Matrix4fc)
    // private parent: () => Matrix4fc;
    // private previous: Matrix4f;
    get(): Matrix4fc;
}