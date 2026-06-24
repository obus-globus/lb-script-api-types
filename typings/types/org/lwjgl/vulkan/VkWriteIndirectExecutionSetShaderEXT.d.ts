import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkWriteIndirectExecutionSetShaderEXT extends Struct<VkWriteIndirectExecutionSetShaderEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDEX: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADER: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkWriteIndirectExecutionSetShaderEXT;
    static calloc(paramarg0: MemoryStack): VkWriteIndirectExecutionSetShaderEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkWriteIndirectExecutionSetShaderEXT;
    static create(paramarg0: number): VkWriteIndirectExecutionSetShaderEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkWriteIndirectExecutionSetShaderEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkWriteIndirectExecutionSetShaderEXT;
    static malloc(paramarg0: MemoryStack): VkWriteIndirectExecutionSetShaderEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindex(paramarg0: number): number;
    static nindex(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshader(paramarg0: number): number;
    static nshader(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkWriteIndirectExecutionSetShaderEXT;
    index(): number;
    index(arg0: number): VkWriteIndirectExecutionSetShaderEXT;
    pNext(): number;
    pNext(arg0: number): VkWriteIndirectExecutionSetShaderEXT;
    sType(): number;
    sType(arg0: number): VkWriteIndirectExecutionSetShaderEXT;
    sType$Default(): VkWriteIndirectExecutionSetShaderEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkWriteIndirectExecutionSetShaderEXT;
    set(arg0: VkWriteIndirectExecutionSetShaderEXT): VkWriteIndirectExecutionSetShaderEXT;
    shader(): number;
    shader(arg0: number): VkWriteIndirectExecutionSetShaderEXT;
    sizeof(): number;
}