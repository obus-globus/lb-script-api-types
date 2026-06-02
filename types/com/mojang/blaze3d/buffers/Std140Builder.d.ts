import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
import type { Vector2fc } from '../../../../org/joml/Vector2fc.d.ts'
import type { Vector2ic } from '../../../../org/joml/Vector2ic.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
import type { Vector3ic } from '../../../../org/joml/Vector3ic.d.ts'
import type { Vector4fc } from '../../../../org/joml/Vector4fc.d.ts'
import type { Vector4ic } from '../../../../org/joml/Vector4ic.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
export class Std140Builder extends Object {
    static intoBuffer(parambuffer: ByteBuffer): Std140Builder;
    static onStack(paramstack: MemoryStack, paramsize: number): Std140Builder;
    private constructor(buffer: ByteBuffer)
    // private buffer: ByteBuffer;
    // private start: number;
    align(alignment: number): Std140Builder;
    get(): ByteBuffer;
    putFloat(value: number): Std140Builder;
    putIVec2(x: number, y: number): Std140Builder;
    putIVec2(vec: Vector2ic): Std140Builder;
    putIVec3(x: number, y: number, z: number): Std140Builder;
    putIVec3(vec: Vector3ic): Std140Builder;
    putIVec4(x: number, y: number, z: number, w: number): Std140Builder;
    putIVec4(vec: Vector4ic): Std140Builder;
    putInt(value: number): Std140Builder;
    putMat4f(vec: Matrix4fc): Std140Builder;
    putVec2(x: number, y: number): Std140Builder;
    putVec2(vec: Vector2fc): Std140Builder;
    putVec3(x: number, y: number, z: number): Std140Builder;
    putVec3(vec: Vector3fc): Std140Builder;
    putVec4(x: number, y: number, z: number, w: number): Std140Builder;
    putVec4(vec: Vector4fc): Std140Builder;
}