import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BuiltShaderStorageInfo } from '../../../../../net/irisshaders/iris/gl/buffer/BuiltShaderStorageInfo.d.ts'
export class ShaderStorageBuffer extends Object {
    constructor(arg0: number, arg1: BuiltShaderStorageInfo)
    // private content: ByteBuffer;
    id: number;
    readonly index: number;
    // private info: BuiltShaderStorageInfo;
    bind(): void;
    createStatic(): void;
    destroy(): void;
    getId(): number;
    getIndex(): number;
    getSize(): number;
    resizeIfRelative(arg0: number, arg1: number): void;
}