import type { Record } from '../../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DynamicUniformStorage$DynamicUniform } from '../../../../net/minecraft/client/renderer/DynamicUniformStorage$DynamicUniform.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
import type { Vector3fc } from '../../../../org/joml/Vector3fc.d.ts'
import type { Vector4fc } from '../../../../org/joml/Vector4fc.d.ts'
export class DynamicUniforms$Transform extends Record implements DynamicUniformStorage$DynamicUniform {
    constructor(modelView: Matrix4fc, colorModulator: Vector4fc, modelOffset: Vector3fc, textureMatrix: Matrix4fc)
    // private colorModulator: Vector4fc;
    // private modelOffset: Vector3fc;
    // private modelView: Matrix4fc;
    // private textureMatrix: Matrix4fc;
    colorModulator(): Vector4fc;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modelOffset(): Vector3fc;
    modelView(): Matrix4fc;
    textureMatrix(): Matrix4fc;
    toString(): string;
    write(buffer: ByteBuffer): void;
}