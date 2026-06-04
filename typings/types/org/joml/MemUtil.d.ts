import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Matrix2d } from '../../org/joml/Matrix2d.d.ts'
import type { Matrix2dc } from '../../org/joml/Matrix2dc.d.ts'
import type { Matrix2f } from '../../org/joml/Matrix2f.d.ts'
import type { Matrix2fc } from '../../org/joml/Matrix2fc.d.ts'
import type { Matrix3d } from '../../org/joml/Matrix3d.d.ts'
import type { Matrix3dc } from '../../org/joml/Matrix3dc.d.ts'
import type { Matrix3f } from '../../org/joml/Matrix3f.d.ts'
import type { Matrix3fc } from '../../org/joml/Matrix3fc.d.ts'
import type { Matrix3x2d } from '../../org/joml/Matrix3x2d.d.ts'
import type { Matrix3x2dc } from '../../org/joml/Matrix3x2dc.d.ts'
import type { Matrix3x2f } from '../../org/joml/Matrix3x2f.d.ts'
import type { Matrix3x2fc } from '../../org/joml/Matrix3x2fc.d.ts'
import type { Matrix4d } from '../../org/joml/Matrix4d.d.ts'
import type { Matrix4f } from '../../org/joml/Matrix4f.d.ts'
import type { Matrix4fc } from '../../org/joml/Matrix4fc.d.ts'
import type { Matrix4x3d } from '../../org/joml/Matrix4x3d.d.ts'
import type { Matrix4x3dc } from '../../org/joml/Matrix4x3dc.d.ts'
import type { Matrix4x3f } from '../../org/joml/Matrix4x3f.d.ts'
import type { Matrix4x3fc } from '../../org/joml/Matrix4x3fc.d.ts'
import type { Quaternionf } from '../../org/joml/Quaternionf.d.ts'
import type { Vector2L } from '../../org/joml/Vector2L.d.ts'
import type { Vector2d } from '../../org/joml/Vector2d.d.ts'
import type { Vector2f } from '../../org/joml/Vector2f.d.ts'
import type { Vector2i } from '../../org/joml/Vector2i.d.ts'
import type { Vector3L } from '../../org/joml/Vector3L.d.ts'
import type { Vector3d } from '../../org/joml/Vector3d.d.ts'
import type { Vector3f } from '../../org/joml/Vector3f.d.ts'
import type { Vector3i } from '../../org/joml/Vector3i.d.ts'
import type { Vector4L } from '../../org/joml/Vector4L.d.ts'
import type { Vector4d } from '../../org/joml/Vector4d.d.ts'
import type { Vector4f } from '../../org/joml/Vector4f.d.ts'
import type { Vector4fc } from '../../org/joml/Vector4fc.d.ts'
import type { Vector4i } from '../../org/joml/Vector4i.d.ts'
export abstract class MemUtil extends Object {
    static INSTANCE: MemUtil;
    constructor()
    copy(arg0: number[], arg1: number, arg2: Matrix2d): void;
    copy(arg0: number[], arg1: number, arg2: Matrix3x2d): void;
    copy(arg0: number[], arg1: number, arg2: Matrix2f): void;
    copy(arg0: number[], arg1: number, arg2: Matrix3f): void;
    copy(arg0: number[], arg1: number, arg2: Matrix3x2f): void;
    copy(arg0: number[], arg1: number, arg2: Matrix4f): void;
    copy(arg0: number[], arg1: number, arg2: Matrix4x3f): void;
    copy(arg0: Matrix2dc, arg1: number[], arg2: number): void;
    copy(arg0: Matrix2dc, arg1: Matrix2d): void;
    copy(arg0: Matrix2dc, arg1: Matrix3d): void;
    copy(arg0: Matrix2dc, arg1: Matrix3x2d): void;
    copy(arg0: Matrix2fc, arg1: number[], arg2: number): void;
    copy(arg0: Matrix2fc, arg1: Matrix2f): void;
    copy(arg0: Matrix2fc, arg1: Matrix3f): void;
    copy(arg0: Matrix2fc, arg1: Matrix3x2f): void;
    copy(arg0: Matrix3dc, arg1: Matrix2d): void;
    copy(arg0: Matrix3fc, arg1: number[], arg2: number): void;
    copy(arg0: Matrix3fc, arg1: Matrix2f): void;
    copy(arg0: Matrix3fc, arg1: Matrix3f): void;
    copy(arg0: Matrix3fc, arg1: Matrix4f): void;
    copy(arg0: Matrix3fc, arg1: Matrix4x3f): void;
    copy(arg0: Matrix3x2dc, arg1: number[], arg2: number): void;
    copy(arg0: Matrix3x2dc, arg1: Matrix2d): void;
    copy(arg0: Matrix3x2dc, arg1: Matrix3x2d): void;
    copy(arg0: Matrix3x2fc, arg1: number[], arg2: number): void;
    copy(arg0: Matrix3x2fc, arg1: Matrix2f): void;
    copy(arg0: Matrix3x2fc, arg1: Matrix3x2f): void;
    copy(arg0: Matrix4fc, arg1: number[], arg2: number): void;
    copy(arg0: Matrix4fc, arg1: Matrix3f): void;
    copy(arg0: Matrix4fc, arg1: Matrix4f): void;
    copy(arg0: Matrix4fc, arg1: Matrix4x3f): void;
    copy(arg0: Matrix4x3fc, arg1: number[], arg2: number): void;
    copy(arg0: Matrix4x3fc, arg1: Matrix4f): void;
    copy(arg0: Matrix4x3fc, arg1: Matrix4x3f): void;
    copy3x3(arg0: Matrix3fc, arg1: Matrix4f): void;
    copy3x3(arg0: Matrix3fc, arg1: Matrix4x3f): void;
    copy3x3(arg0: Matrix3x2dc, arg1: number[], arg2: number): void;
    copy3x3(arg0: Matrix3x2fc, arg1: number[], arg2: number): void;
    copy3x3(arg0: Matrix4fc, arg1: Matrix4f): void;
    copy3x3(arg0: Matrix4x3fc, arg1: Matrix4x3f): void;
    copy4x3(arg0: Matrix4fc, arg1: Matrix4f): void;
    copy4x3(arg0: Matrix4x3fc, arg1: Matrix4f): void;
    copy4x4(arg0: Matrix3x2dc, arg1: number[], arg2: number): void;
    copy4x4(arg0: Matrix3x2fc, arg1: number[], arg2: number): void;
    copy4x4(arg0: Matrix4x3dc, arg1: number[], arg2: number): void;
    copy4x4(arg0: Matrix4x3fc, arg1: number[], arg2: number): void;
    copyTransposed(arg0: number[], arg1: number, arg2: Matrix4f): void;
    get(arg0: Matrix2d, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Matrix2d, arg1: number, arg2: DoubleBuffer): void;
    get(arg0: Matrix2f, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Matrix2f, arg1: number, arg2: FloatBuffer): void;
    get(arg0: Matrix3d, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Matrix3d, arg1: number, arg2: DoubleBuffer): void;
    get(arg0: Matrix3d, arg1: number, arg2: number): number;
    get(arg0: Matrix3f, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Matrix3f, arg1: number, arg2: FloatBuffer): void;
    get(arg0: Matrix3f, arg1: number, arg2: number): number;
    get(arg0: Matrix3x2d, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Matrix3x2d, arg1: number, arg2: DoubleBuffer): void;
    get(arg0: Matrix3x2f, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Matrix3x2f, arg1: number, arg2: FloatBuffer): void;
    get(arg0: Matrix4d, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Matrix4d, arg1: number, arg2: DoubleBuffer): void;
    get(arg0: Matrix4d, arg1: number, arg2: number): number;
    get(arg0: Matrix4f, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Matrix4f, arg1: number, arg2: FloatBuffer): void;
    get(arg0: Matrix4f, arg1: number, arg2: number): number;
    get(arg0: Matrix4x3d, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Matrix4x3d, arg1: number, arg2: DoubleBuffer): void;
    get(arg0: Matrix4x3f, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Matrix4x3f, arg1: number, arg2: FloatBuffer): void;
    get(arg0: Vector2L, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector2L, arg1: number, arg2: LongBuffer): void;
    get(arg0: Vector2d, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector2d, arg1: number, arg2: DoubleBuffer): void;
    get(arg0: Vector2f, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector2f, arg1: number, arg2: FloatBuffer): void;
    get(arg0: Vector2i, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector2i, arg1: number, arg2: IntBuffer): void;
    get(arg0: Vector3L, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector3L, arg1: number, arg2: LongBuffer): void;
    get(arg0: Vector3d, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector3d, arg1: number, arg2: DoubleBuffer): void;
    get(arg0: Vector3f, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector3f, arg1: number, arg2: FloatBuffer): void;
    get(arg0: Vector3i, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector3i, arg1: number, arg2: IntBuffer): void;
    get(arg0: Vector4L, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector4L, arg1: number, arg2: LongBuffer): void;
    get(arg0: Vector4d, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector4d, arg1: number, arg2: DoubleBuffer): void;
    get(arg0: Vector4f, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector4f, arg1: number, arg2: FloatBuffer): void;
    get(arg0: Vector4i, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector4i, arg1: number, arg2: IntBuffer): void;
    getColumn(arg0: Matrix4f, arg1: number, arg2: Vector4f): Vector4f;
    getTransposed(arg0: Matrix4f, arg1: number, arg2: ByteBuffer): void;
    getTransposed(arg0: Matrix4f, arg1: number, arg2: FloatBuffer): void;
    getf(arg0: Matrix2d, arg1: number, arg2: ByteBuffer): void;
    getf(arg0: Matrix2d, arg1: number, arg2: FloatBuffer): void;
    getf(arg0: Matrix3d, arg1: number, arg2: ByteBuffer): void;
    getf(arg0: Matrix3d, arg1: number, arg2: FloatBuffer): void;
    getf(arg0: Matrix4d, arg1: number, arg2: ByteBuffer): void;
    getf(arg0: Matrix4d, arg1: number, arg2: FloatBuffer): void;
    getf(arg0: Matrix4x3d, arg1: number, arg2: ByteBuffer): void;
    getf(arg0: Matrix4x3d, arg1: number, arg2: FloatBuffer): void;
    identity(arg0: Matrix2f): void;
    identity(arg0: Matrix3f): void;
    identity(arg0: Matrix3x2d): void;
    identity(arg0: Matrix3x2f): void;
    identity(arg0: Matrix4f): void;
    identity(arg0: Matrix4x3f): void;
    put(arg0: Matrix2d, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Matrix2d, arg1: number, arg2: DoubleBuffer): void;
    put(arg0: Matrix2f, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Matrix2f, arg1: number, arg2: FloatBuffer): void;
    put(arg0: Matrix3d, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Matrix3d, arg1: number, arg2: DoubleBuffer): void;
    put(arg0: Matrix3f, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Matrix3f, arg1: number, arg2: FloatBuffer): void;
    put(arg0: Matrix3x2d, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Matrix3x2d, arg1: number, arg2: DoubleBuffer): void;
    put(arg0: Matrix3x2f, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Matrix3x2f, arg1: number, arg2: FloatBuffer): void;
    put(arg0: Matrix4d, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Matrix4d, arg1: number, arg2: DoubleBuffer): void;
    put(arg0: Matrix4f, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Matrix4f, arg1: number, arg2: FloatBuffer): void;
    put(arg0: Matrix4x3d, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Matrix4x3d, arg1: number, arg2: DoubleBuffer): void;
    put(arg0: Matrix4x3f, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Matrix4x3f, arg1: number, arg2: FloatBuffer): void;
    put(arg0: Vector2L, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector2L, arg1: number, arg2: LongBuffer): void;
    put(arg0: Vector2d, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector2d, arg1: number, arg2: DoubleBuffer): void;
    put(arg0: Vector2f, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector2f, arg1: number, arg2: FloatBuffer): void;
    put(arg0: Vector2i, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector2i, arg1: number, arg2: IntBuffer): void;
    put(arg0: Vector3L, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector3L, arg1: number, arg2: LongBuffer): void;
    put(arg0: Vector3d, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector3d, arg1: number, arg2: DoubleBuffer): void;
    put(arg0: Vector3d, arg1: number, arg2: FloatBuffer): void;
    put(arg0: Vector3f, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector3f, arg1: number, arg2: FloatBuffer): void;
    put(arg0: Vector3i, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector3i, arg1: number, arg2: IntBuffer): void;
    put(arg0: Vector4L, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector4L, arg1: number, arg2: LongBuffer): void;
    put(arg0: Vector4d, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector4d, arg1: number, arg2: DoubleBuffer): void;
    put(arg0: Vector4d, arg1: number, arg2: FloatBuffer): void;
    put(arg0: Vector4f, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector4f, arg1: number, arg2: FloatBuffer): void;
    put(arg0: Vector4i, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector4i, arg1: number, arg2: IntBuffer): void;
    put3x3(arg0: Matrix3x2d, arg1: number, arg2: ByteBuffer): void;
    put3x3(arg0: Matrix3x2d, arg1: number, arg2: DoubleBuffer): void;
    put3x3(arg0: Matrix3x2f, arg1: number, arg2: ByteBuffer): void;
    put3x3(arg0: Matrix3x2f, arg1: number, arg2: FloatBuffer): void;
    put3x4(arg0: Matrix3f, arg1: number, arg2: ByteBuffer): void;
    put3x4(arg0: Matrix3f, arg1: number, arg2: FloatBuffer): void;
    put3x4(arg0: Matrix4f, arg1: number, arg2: ByteBuffer): void;
    put3x4(arg0: Matrix4f, arg1: number, arg2: FloatBuffer): void;
    put3x4(arg0: Matrix4x3f, arg1: number, arg2: ByteBuffer): void;
    put3x4(arg0: Matrix4x3f, arg1: number, arg2: FloatBuffer): void;
    put4x3(arg0: Matrix4f, arg1: number, arg2: ByteBuffer): void;
    put4x3(arg0: Matrix4f, arg1: number, arg2: FloatBuffer): void;
    put4x3Transposed(arg0: Matrix4d, arg1: number, arg2: ByteBuffer): void;
    put4x3Transposed(arg0: Matrix4d, arg1: number, arg2: DoubleBuffer): void;
    put4x3Transposed(arg0: Matrix4f, arg1: number, arg2: ByteBuffer): void;
    put4x3Transposed(arg0: Matrix4f, arg1: number, arg2: FloatBuffer): void;
    put4x4(arg0: Matrix3x2d, arg1: number, arg2: ByteBuffer): void;
    put4x4(arg0: Matrix3x2d, arg1: number, arg2: DoubleBuffer): void;
    put4x4(arg0: Matrix3x2f, arg1: number, arg2: ByteBuffer): void;
    put4x4(arg0: Matrix3x2f, arg1: number, arg2: FloatBuffer): void;
    put4x4(arg0: Matrix4x3d, arg1: number, arg2: ByteBuffer): void;
    put4x4(arg0: Matrix4x3d, arg1: number, arg2: DoubleBuffer): void;
    put4x4(arg0: Matrix4x3f, arg1: number, arg2: ByteBuffer): void;
    put4x4(arg0: Matrix4x3f, arg1: number, arg2: FloatBuffer): void;
    putMatrix3f(arg0: Quaternionf, arg1: number, arg2: ByteBuffer): void;
    putMatrix3f(arg0: Quaternionf, arg1: number, arg2: FloatBuffer): void;
    putMatrix4f(arg0: Quaternionf, arg1: number, arg2: ByteBuffer): void;
    putMatrix4f(arg0: Quaternionf, arg1: number, arg2: FloatBuffer): void;
    putMatrix4x3f(arg0: Quaternionf, arg1: number, arg2: ByteBuffer): void;
    putMatrix4x3f(arg0: Quaternionf, arg1: number, arg2: FloatBuffer): void;
    putTransposed(arg0: Matrix2d, arg1: number, arg2: ByteBuffer): void;
    putTransposed(arg0: Matrix2d, arg1: number, arg2: DoubleBuffer): void;
    putTransposed(arg0: Matrix2f, arg1: number, arg2: ByteBuffer): void;
    putTransposed(arg0: Matrix2f, arg1: number, arg2: FloatBuffer): void;
    putTransposed(arg0: Matrix3d, arg1: number, arg2: ByteBuffer): void;
    putTransposed(arg0: Matrix3d, arg1: number, arg2: DoubleBuffer): void;
    putTransposed(arg0: Matrix3f, arg1: number, arg2: ByteBuffer): void;
    putTransposed(arg0: Matrix3f, arg1: number, arg2: FloatBuffer): void;
    putTransposed(arg0: Matrix3x2d, arg1: number, arg2: ByteBuffer): void;
    putTransposed(arg0: Matrix3x2d, arg1: number, arg2: DoubleBuffer): void;
    putTransposed(arg0: Matrix3x2f, arg1: number, arg2: FloatBuffer): void;
    putTransposed(arg0: Matrix4d, arg1: number, arg2: ByteBuffer): void;
    putTransposed(arg0: Matrix4d, arg1: number, arg2: DoubleBuffer): void;
    putTransposed(arg0: Matrix4f, arg1: number, arg2: ByteBuffer): void;
    putTransposed(arg0: Matrix4f, arg1: number, arg2: FloatBuffer): void;
    putTransposed(arg0: Matrix4x3d, arg1: number, arg2: ByteBuffer): void;
    putTransposed(arg0: Matrix4x3d, arg1: number, arg2: DoubleBuffer): void;
    putTransposed(arg0: Matrix4x3f, arg1: number, arg2: ByteBuffer): void;
    putTransposed(arg0: Matrix4x3f, arg1: number, arg2: FloatBuffer): void;
    putf(arg0: Matrix2d, arg1: number, arg2: ByteBuffer): void;
    putf(arg0: Matrix2d, arg1: number, arg2: FloatBuffer): void;
    putf(arg0: Matrix3d, arg1: number, arg2: ByteBuffer): void;
    putf(arg0: Matrix3d, arg1: number, arg2: FloatBuffer): void;
    putf(arg0: Matrix4d, arg1: number, arg2: ByteBuffer): void;
    putf(arg0: Matrix4d, arg1: number, arg2: FloatBuffer): void;
    putf(arg0: Matrix4x3d, arg1: number, arg2: ByteBuffer): void;
    putf(arg0: Matrix4x3d, arg1: number, arg2: FloatBuffer): void;
    putf(arg0: Vector3d, arg1: number, arg2: ByteBuffer): void;
    putf(arg0: Vector4d, arg1: number, arg2: ByteBuffer): void;
    putfTransposed(arg0: Matrix2d, arg1: number, arg2: ByteBuffer): void;
    putfTransposed(arg0: Matrix2d, arg1: number, arg2: FloatBuffer): void;
    putfTransposed(arg0: Matrix3d, arg1: number, arg2: ByteBuffer): void;
    putfTransposed(arg0: Matrix3d, arg1: number, arg2: FloatBuffer): void;
    putfTransposed(arg0: Matrix3x2d, arg1: number, arg2: ByteBuffer): void;
    putfTransposed(arg0: Matrix3x2d, arg1: number, arg2: FloatBuffer): void;
    putfTransposed(arg0: Matrix4d, arg1: number, arg2: ByteBuffer): void;
    putfTransposed(arg0: Matrix4d, arg1: number, arg2: FloatBuffer): void;
    putfTransposed(arg0: Matrix4x3d, arg1: number, arg2: ByteBuffer): void;
    putfTransposed(arg0: Matrix4x3d, arg1: number, arg2: FloatBuffer): void;
    set(arg0: Matrix3d, arg1: number, arg2: number, arg3: number): Matrix3d;
    set(arg0: Matrix3f, arg1: number, arg2: number, arg3: number): Matrix3f;
    set(arg0: Matrix4d, arg1: number, arg2: number, arg3: number): Matrix4d;
    set(arg0: Matrix4f, arg1: number, arg2: number, arg3: number): Matrix4f;
    setColumn(arg0: Vector4f, arg1: number, arg2: Matrix4f): Matrix4f;
    setColumn(arg0: Vector4fc, arg1: number, arg2: Matrix4f): Matrix4f;
    swap(arg0: Matrix2d, arg1: Matrix2d): void;
    swap(arg0: Matrix2f, arg1: Matrix2f): void;
    swap(arg0: Matrix3f, arg1: Matrix3f): void;
    swap(arg0: Matrix4f, arg1: Matrix4f): void;
    swap(arg0: Matrix4x3f, arg1: Matrix4x3f): void;
    zero(arg0: Matrix2d): void;
    zero(arg0: Matrix2f): void;
    zero(arg0: Matrix3f): void;
    zero(arg0: Matrix3x2d): void;
    zero(arg0: Matrix3x2f): void;
    zero(arg0: Matrix4f): void;
    zero(arg0: Matrix4x3f): void;
}