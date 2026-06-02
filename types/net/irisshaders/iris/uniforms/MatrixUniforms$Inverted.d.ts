import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
export class MatrixUniforms$Inverted extends Record implements Supplier<Matrix4fc> {
    private constructor(parent: () => Matrix4fc)
    // private parent: () => Matrix4fc;
    equals(arg0: Object | null): boolean;
    get(): Matrix4fc;
    hashCode(): number;
    parent(): () => Matrix4fc;
    toString(): string;
}