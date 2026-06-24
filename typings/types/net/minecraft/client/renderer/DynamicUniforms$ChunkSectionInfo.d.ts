import type { Record } from '../../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DynamicUniformStorage$DynamicUniform } from '../../../../net/minecraft/client/renderer/DynamicUniformStorage$DynamicUniform.d.ts'
import type { Matrix4fc } from '../../../../org/joml/Matrix4fc.d.ts'
export class DynamicUniforms$ChunkSectionInfo extends Record implements DynamicUniformStorage$DynamicUniform {
    constructor(modelView: Matrix4fc, x: number, y: number, z: number, visibility: number, textureAtlasWidth: number, textureAtlasHeight: number)
    // private modelView: Matrix4fc;
    // private textureAtlasHeight: number;
    // private textureAtlasWidth: number;
    // private visibility: number;
    // private x: number;
    // private y: number;
    // private z: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modelView(): Matrix4fc;
    textureAtlasHeight(): number;
    textureAtlasWidth(): number;
    toString(): string;
    visibility(): number;
    write(buffer: ByteBuffer): void;
    x(): number;
    y(): number;
    z(): number;
}