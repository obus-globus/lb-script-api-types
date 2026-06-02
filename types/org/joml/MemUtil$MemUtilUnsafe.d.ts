import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { DoubleBuffer } from '../../java/nio/DoubleBuffer.d.ts'
import type { FloatBuffer } from '../../java/nio/FloatBuffer.d.ts'
import type { IntBuffer } from '../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../java/nio/LongBuffer.d.ts'
import type { Matrix2d } from '../../org/joml/Matrix2d.d.ts'
import type { Matrix2f } from '../../org/joml/Matrix2f.d.ts'
import type { Matrix3d } from '../../org/joml/Matrix3d.d.ts'
import type { Matrix3f } from '../../org/joml/Matrix3f.d.ts'
import type { Matrix3x2d } from '../../org/joml/Matrix3x2d.d.ts'
import type { Matrix3x2f } from '../../org/joml/Matrix3x2f.d.ts'
import type { Matrix4d } from '../../org/joml/Matrix4d.d.ts'
import type { Matrix4f } from '../../org/joml/Matrix4f.d.ts'
import type { Matrix4x3d } from '../../org/joml/Matrix4x3d.d.ts'
import type { Matrix4x3f } from '../../org/joml/Matrix4x3f.d.ts'
import type { MemUtil } from '../../org/joml/MemUtil.d.ts'
import type { MemUtil$MemUtilNIO } from '../../org/joml/MemUtil$MemUtilNIO.d.ts'
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
import type { Vector4i } from '../../org/joml/Vector4i.d.ts'
import type { Unsafe } from '../../sun/misc/Unsafe.d.ts'
export class MemUtil$MemUtilUnsafe extends MemUtil$MemUtilNIO {
    static ADDRESS: number;
    static INSTANCE: MemUtil;
    static Matrix2f_m00: number;
    static Matrix3d_m00: number;
    static Matrix3f_m00: number;
    static Matrix3x2f_m00: number;
    static Matrix4d_m00: number;
    static Matrix4f_m00: number;
    static Matrix4x3f_m00: number;
    static UNSAFE: Unsafe;
    static Vector2f_x: number;
    static Vector2i_x: number;
    static Vector3f_x: number;
    static Vector3i_x: number;
    static Vector4f_x: number;
    static Vector4i_x: number;
    static floatArrayOffset: number;
    static get(paramarg0: Matrix2d, paramarg1: number): void;
    static get(paramarg0: Matrix2f, paramarg1: number): void;
    static get(paramarg0: Matrix3d, paramarg1: number): void;
    static get(paramarg0: Matrix3f, paramarg1: number): void;
    static get(paramarg0: Matrix3x2d, paramarg1: number): void;
    static get(paramarg0: Matrix3x2f, paramarg1: number): void;
    static get(paramarg0: Matrix4d, paramarg1: number): void;
    static get(paramarg0: Matrix4f, paramarg1: number): void;
    static get(paramarg0: Matrix4x3d, paramarg1: number): void;
    static get(paramarg0: Matrix4x3f, paramarg1: number): void;
    static get(paramarg0: Vector2L, paramarg1: number): void;
    static get(paramarg0: Vector2d, paramarg1: number): void;
    static get(paramarg0: Vector2f, paramarg1: number): void;
    static get(paramarg0: Vector2i, paramarg1: number): void;
    static get(paramarg0: Vector3L, paramarg1: number): void;
    static get(paramarg0: Vector3d, paramarg1: number): void;
    static get(paramarg0: Vector3f, paramarg1: number): void;
    static get(paramarg0: Vector3i, paramarg1: number): void;
    static get(paramarg0: Vector4L, paramarg1: number): void;
    static get(paramarg0: Vector4d, paramarg1: number): void;
    static get(paramarg0: Vector4f, paramarg1: number): void;
    static get(paramarg0: Vector4i, paramarg1: number): void;
    static getTransposed(paramarg0: Matrix2d, paramarg1: number): void;
    static getTransposed(paramarg0: Matrix2f, paramarg1: number): void;
    static getTransposed(paramarg0: Matrix3d, paramarg1: number): void;
    static getTransposed(paramarg0: Matrix3f, paramarg1: number): void;
    static getTransposed(paramarg0: Matrix3x2d, paramarg1: number): void;
    static getTransposed(paramarg0: Matrix3x2f, paramarg1: number): void;
    static getTransposed(paramarg0: Matrix4d, paramarg1: number): void;
    static getTransposed(paramarg0: Matrix4f, paramarg1: number): void;
    static getTransposed(paramarg0: Matrix4x3d, paramarg1: number): void;
    static getTransposed(paramarg0: Matrix4x3f, paramarg1: number): void;
    static getUnsafeInstance(): Unsafe;
    static getf(paramarg0: Matrix2d, paramarg1: number): void;
    static getf(paramarg0: Matrix3d, paramarg1: number): void;
    static getf(paramarg0: Matrix4d, paramarg1: number): void;
    static getf(paramarg0: Matrix4x3d, paramarg1: number): void;
    static put(paramarg0: Matrix2d, paramarg1: number): void;
    static put(paramarg0: Matrix2f, paramarg1: number): void;
    static put(paramarg0: Matrix3d, paramarg1: number): void;
    static put(paramarg0: Matrix3f, paramarg1: number): void;
    static put(paramarg0: Matrix3x2d, paramarg1: number): void;
    static put(paramarg0: Matrix3x2f, paramarg1: number): void;
    static put(paramarg0: Matrix4d, paramarg1: number): void;
    static put(paramarg0: Matrix4f, paramarg1: number): void;
    static put(paramarg0: Matrix4x3d, paramarg1: number): void;
    static put(paramarg0: Matrix4x3f, paramarg1: number): void;
    static put(paramarg0: Vector2L, paramarg1: number): void;
    static put(paramarg0: Vector2d, paramarg1: number): void;
    static put(paramarg0: Vector2f, paramarg1: number): void;
    static put(paramarg0: Vector2i, paramarg1: number): void;
    static put(paramarg0: Vector3L, paramarg1: number): void;
    static put(paramarg0: Vector3d, paramarg1: number): void;
    static put(paramarg0: Vector3f, paramarg1: number): void;
    static put(paramarg0: Vector3i, paramarg1: number): void;
    static put(paramarg0: Vector4L, paramarg1: number): void;
    static put(paramarg0: Vector4d, paramarg1: number): void;
    static put(paramarg0: Vector4f, paramarg1: number): void;
    static put(paramarg0: Vector4i, paramarg1: number): void;
    static put3x3(paramarg0: Matrix3x2d, paramarg1: number): void;
    static put3x3(paramarg0: Matrix3x2f, paramarg1: number): void;
    static put3x4(paramarg0: Matrix3f, paramarg1: number): void;
    static put3x4(paramarg0: Matrix4f, paramarg1: number): void;
    static put3x4(paramarg0: Matrix4x3f, paramarg1: number): void;
    static put4x3(paramarg0: Matrix4f, paramarg1: number): void;
    static put4x3Transposed(paramarg0: Matrix4d, paramarg1: number): void;
    static put4x3Transposed(paramarg0: Matrix4f, paramarg1: number): void;
    static put4x4(paramarg0: Matrix3x2d, paramarg1: number): void;
    static put4x4(paramarg0: Matrix3x2f, paramarg1: number): void;
    static put4x4(paramarg0: Matrix4x3d, paramarg1: number): void;
    static put4x4(paramarg0: Matrix4x3f, paramarg1: number): void;
    static putMatrix3f(paramarg0: Quaternionf, paramarg1: number): void;
    static putMatrix4f(paramarg0: Quaternionf, paramarg1: number): void;
    static putMatrix4x3f(paramarg0: Quaternionf, paramarg1: number): void;
    static putTransposed(paramarg0: Matrix2d, paramarg1: number): void;
    static putTransposed(paramarg0: Matrix2f, paramarg1: number): void;
    static putTransposed(paramarg0: Matrix3d, paramarg1: number): void;
    static putTransposed(paramarg0: Matrix3f, paramarg1: number): void;
    static putTransposed(paramarg0: Matrix3x2d, paramarg1: number): void;
    static putTransposed(paramarg0: Matrix3x2f, paramarg1: number): void;
    static putTransposed(paramarg0: Matrix4d, paramarg1: number): void;
    static putTransposed(paramarg0: Matrix4f, paramarg1: number): void;
    static putTransposed(paramarg0: Matrix4x3d, paramarg1: number): void;
    static putTransposed(paramarg0: Matrix4x3f, paramarg1: number): void;
    static putf(paramarg0: Matrix2d, paramarg1: number): void;
    static putf(paramarg0: Matrix3d, paramarg1: number): void;
    static putf(paramarg0: Matrix4d, paramarg1: number): void;
    static putf(paramarg0: Matrix4x3d, paramarg1: number): void;
    static putf(paramarg0: Vector3d, paramarg1: number): void;
    static putf(paramarg0: Vector4d, paramarg1: number): void;
    static putfTransposed(paramarg0: Matrix2d, paramarg1: number): void;
    static putfTransposed(paramarg0: Matrix3d, paramarg1: number): void;
    static putfTransposed(paramarg0: Matrix3x2d, paramarg1: number): void;
    static putfTransposed(paramarg0: Matrix4d, paramarg1: number): void;
    static putfTransposed(paramarg0: Matrix4x3d, paramarg1: number): void;
    constructor()
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
    get(arg0: Vector2d, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector2d, arg1: number, arg2: DoubleBuffer): void;
    get(arg0: Vector2f, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector2f, arg1: number, arg2: FloatBuffer): void;
    get(arg0: Vector2i, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector2i, arg1: number, arg2: IntBuffer): void;
    get(arg0: Vector3d, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector3d, arg1: number, arg2: DoubleBuffer): void;
    get(arg0: Vector3f, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector3f, arg1: number, arg2: FloatBuffer): void;
    get(arg0: Vector3i, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector3i, arg1: number, arg2: IntBuffer): void;
    get(arg0: Vector4d, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector4d, arg1: number, arg2: DoubleBuffer): void;
    get(arg0: Vector4f, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector4f, arg1: number, arg2: FloatBuffer): void;
    get(arg0: Vector4i, arg1: number, arg2: ByteBuffer): void;
    get(arg0: Vector4i, arg1: number, arg2: IntBuffer): void;
    getf(arg0: Matrix2d, arg1: number, arg2: ByteBuffer): void;
    getf(arg0: Matrix2d, arg1: number, arg2: FloatBuffer): void;
    getf(arg0: Matrix3d, arg1: number, arg2: ByteBuffer): void;
    getf(arg0: Matrix3d, arg1: number, arg2: FloatBuffer): void;
    getf(arg0: Matrix4d, arg1: number, arg2: ByteBuffer): void;
    getf(arg0: Matrix4d, arg1: number, arg2: FloatBuffer): void;
    getf(arg0: Matrix4x3d, arg1: number, arg2: ByteBuffer): void;
    getf(arg0: Matrix4x3d, arg1: number, arg2: FloatBuffer): void;
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
    put(arg0: Vector3d, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector3d, arg1: number, arg2: DoubleBuffer): void;
    put(arg0: Vector3d, arg1: number, arg2: FloatBuffer): void;
    put(arg0: Vector3f, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector3f, arg1: number, arg2: FloatBuffer): void;
    put(arg0: Vector3i, arg1: number, arg2: ByteBuffer): void;
    put(arg0: Vector3i, arg1: number, arg2: IntBuffer): void;
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
}