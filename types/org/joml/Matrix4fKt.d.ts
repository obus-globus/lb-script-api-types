import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AxisAngle4f } from '../../org/joml/AxisAngle4f.d.ts'
import type { Matrix4f } from '../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Quaternionfc } from '../../org/joml/Quaternionfc.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
export class Matrix4fKt extends Object {
    static getMatrix4f(paramarg0: ByteBuffer, paramarg1: Matrix4f): Matrix4f;
    static getMatrix4f(paramarg0: FloatBuffer): Matrix4f;
    static getMatrix4f(paramarg0: FloatBuffer, paramarg1: Matrix4f): Matrix4f;
    static minus(paramarg0: Matrix4fc, paramarg1: Matrix4fc): Matrix4f;
    static minusAssign(paramarg0: Matrix4f, paramarg1: Matrix4fc): void;
    static mulComponentWise(paramarg0: Matrix4fc, paramarg1: Matrix4fc): Matrix4f;
    static plus(paramarg0: Matrix4fc, paramarg1: Matrix4fc): Matrix4f;
    static plusAssign(paramarg0: Matrix4f, paramarg1: Matrix4fc): void;
    static putMatrix4f(paramarg0: ByteBuffer, paramarg1: number, paramarg2: Matrix4f): ByteBuffer;
    static putMatrix4f(paramarg0: ByteBuffer, paramarg1: Matrix4f): ByteBuffer;
    static putMatrix4f(paramarg0: FloatBuffer, paramarg1: number, paramarg2: Matrix4f): FloatBuffer;
    static putMatrix4f(paramarg0: FloatBuffer, paramarg1: Matrix4f): FloatBuffer;
    static times(paramarg0: Matrix4fc, paramarg1: AxisAngle4f): Matrix4f;
    static times(paramarg0: Matrix4fc, paramarg1: Matrix4fc): Matrix4f;
    static times(paramarg0: Matrix4fc, paramarg1: Quaternionfc): Matrix4f;
    static times(paramarg0: Matrix4fc, paramarg1: Vector4fc): Vector4f;
    static timesAssign(paramarg0: Matrix4f, paramarg1: AxisAngle4f): void;
    static timesAssign(paramarg0: Matrix4f, paramarg1: Matrix4fc): void;
    static timesAssign(paramarg0: Matrix4f, paramarg1: Quaternionfc): void;
}