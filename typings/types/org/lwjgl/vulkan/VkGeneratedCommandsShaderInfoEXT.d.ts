import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkGeneratedCommandsShaderInfoEXT extends Struct<VkGeneratedCommandsShaderInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSHADERS: number;
    static SHADERCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkGeneratedCommandsShaderInfoEXT;
    static calloc(paramarg0: MemoryStack): VkGeneratedCommandsShaderInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkGeneratedCommandsShaderInfoEXT;
    static create(paramarg0: number): VkGeneratedCommandsShaderInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkGeneratedCommandsShaderInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkGeneratedCommandsShaderInfoEXT;
    static malloc(paramarg0: MemoryStack): VkGeneratedCommandsShaderInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npShaders(paramarg0: number): LongBuffer;
    static npShaders(paramarg0: number, paramarg1: LongBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderCount(paramarg0: number): number;
    static nshaderCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkGeneratedCommandsShaderInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkGeneratedCommandsShaderInfoEXT;
    pShaders(): LongBuffer;
    pShaders(arg0: LongBuffer): VkGeneratedCommandsShaderInfoEXT;
    sType(): number;
    sType(arg0: number): VkGeneratedCommandsShaderInfoEXT;
    sType$Default(): VkGeneratedCommandsShaderInfoEXT;
    set(arg0: number, arg1: number, arg2: LongBuffer): VkGeneratedCommandsShaderInfoEXT;
    set(arg0: VkGeneratedCommandsShaderInfoEXT): VkGeneratedCommandsShaderInfoEXT;
    shaderCount(): number;
    sizeof(): number;
}