import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDescriptorMappingSourceIndirectAddressEXT extends Struct<VkDescriptorMappingSourceIndirectAddressEXT> implements NativeResource {
    static ADDRESSOFFSET: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PUSHOFFSET: number;
    static SIZEOF: number;
    static calloc(): VkDescriptorMappingSourceIndirectAddressEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorMappingSourceIndirectAddressEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorMappingSourceIndirectAddressEXT;
    static create(paramarg0: number): VkDescriptorMappingSourceIndirectAddressEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorMappingSourceIndirectAddressEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorMappingSourceIndirectAddressEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorMappingSourceIndirectAddressEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddressOffset(paramarg0: number): number;
    static naddressOffset(paramarg0: number, paramarg1: number): void;
    static npushOffset(paramarg0: number): number;
    static npushOffset(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    addressOffset(): number;
    addressOffset(arg0: number): VkDescriptorMappingSourceIndirectAddressEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorMappingSourceIndirectAddressEXT;
    pushOffset(): number;
    pushOffset(arg0: number): VkDescriptorMappingSourceIndirectAddressEXT;
    set(arg0: number, arg1: number): VkDescriptorMappingSourceIndirectAddressEXT;
    set(arg0: VkDescriptorMappingSourceIndirectAddressEXT): VkDescriptorMappingSourceIndirectAddressEXT;
    sizeof(): number;
}