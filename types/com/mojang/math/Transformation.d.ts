import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Matrix4f } from '../../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../../org/joml/Matrix4fc.d.ts'
import type { Quaternionfc } from '../../../org/joml/Quaternionfc.d.ts'
import type { Vector3fc } from '../../../org/joml/Vector3fc.d.ts'
export class Transformation extends Object {
    static CODEC: Codec<Transformation>;
    static EXTENDED_CODEC: Codec<Transformation>;
    static IDENTITY: Transformation;
    static compose(paramparent: Matrix4fc, paramtransform: Optional<Transformation>): Matrix4fc;
    constructor(matrix: Matrix4fc)
    constructor(translation: Vector3fc, leftRotation: Quaternionfc, scale: Vector3fc, rightRotation: Quaternionfc)
    // private decomposed: boolean;
    // private leftRotation: Quaternionfc;
    readonly matrix: Matrix4fc;
    // private rightRotation: Quaternionfc;
    // private scale: Vector3fc;
    // private translation: Vector3fc;
    compose(that: Transformation): Transformation;
    // private ensureDecomposed(): void;
    equals(o: Object | null): boolean;
    getMatrix(): Matrix4fc;
    getMatrixCopy(): Matrix4f;
    hashCode(): number;
    inverse(): Transformation;
    leftRotation(): Quaternionfc;
    rightRotation(): Quaternionfc;
    scale(): Vector3fc;
    slerp(that: Transformation, progress: number): Transformation;
    translation(): Vector3fc;
}