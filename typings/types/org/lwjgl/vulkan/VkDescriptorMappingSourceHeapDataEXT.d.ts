import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDescriptorMappingSourceHeapDataEXT extends Struct<VkDescriptorMappingSourceHeapDataEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static HEAPOFFSET: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PUSHOFFSET: number;
    static SIZEOF: number;
    static calloc(): VkDescriptorMappingSourceHeapDataEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorMappingSourceHeapDataEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorMappingSourceHeapDataEXT;
    static create(paramarg0: number): VkDescriptorMappingSourceHeapDataEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorMappingSourceHeapDataEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorMappingSourceHeapDataEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorMappingSourceHeapDataEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nheapOffset(paramarg0: number): number;
    static nheapOffset(paramarg0: number, paramarg1: number): void;
    static npushOffset(paramarg0: number): number;
    static npushOffset(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorMappingSourceHeapDataEXT;
    heapOffset(): number;
    heapOffset(arg0: number): VkDescriptorMappingSourceHeapDataEXT;
    pushOffset(): number;
    pushOffset(arg0: number): VkDescriptorMappingSourceHeapDataEXT;
    set(arg0: number, arg1: number): VkDescriptorMappingSourceHeapDataEXT;
    set(arg0: VkDescriptorMappingSourceHeapDataEXT): VkDescriptorMappingSourceHeapDataEXT;
    sizeof(): number;
}