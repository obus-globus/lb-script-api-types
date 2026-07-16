import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVertexInputAttributeDescription2EXT extends Struct<VkVertexInputAttributeDescription2EXT> implements NativeResource {
    static ALIGNOF: number;
    static BINDING: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FORMAT: number;
    static LOCATION: number;
    static OFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVertexInputAttributeDescription2EXT;
    static calloc(paramarg0: MemoryStack): VkVertexInputAttributeDescription2EXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVertexInputAttributeDescription2EXT;
    static create(paramarg0: number): VkVertexInputAttributeDescription2EXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVertexInputAttributeDescription2EXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVertexInputAttributeDescription2EXT;
    static malloc(paramarg0: MemoryStack): VkVertexInputAttributeDescription2EXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbinding(paramarg0: number): number;
    static nbinding(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static nlocation(paramarg0: number): number;
    static nlocation(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    binding(): number;
    binding(arg0: number): VkVertexInputAttributeDescription2EXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVertexInputAttributeDescription2EXT;
    format(): number;
    format(arg0: number): VkVertexInputAttributeDescription2EXT;
    location(): number;
    location(arg0: number): VkVertexInputAttributeDescription2EXT;
    offset(): number;
    offset(arg0: number): VkVertexInputAttributeDescription2EXT;
    pNext(): number;
    pNext(arg0: number): VkVertexInputAttributeDescription2EXT;
    sType(): number;
    sType(arg0: number): VkVertexInputAttributeDescription2EXT;
    sType$Default(): VkVertexInputAttributeDescription2EXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkVertexInputAttributeDescription2EXT;
    set(arg0: VkVertexInputAttributeDescription2EXT): VkVertexInputAttributeDescription2EXT;
    sizeof(): number;
}