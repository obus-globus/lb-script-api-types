import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDescriptorMappingSourceConstantOffsetEXT } from '../../../org/lwjgl/vulkan/VkDescriptorMappingSourceConstantOffsetEXT.d.ts'
import type { VkDescriptorMappingSourceHeapDataEXT } from '../../../org/lwjgl/vulkan/VkDescriptorMappingSourceHeapDataEXT.d.ts'
import type { VkDescriptorMappingSourceIndirectAddressEXT } from '../../../org/lwjgl/vulkan/VkDescriptorMappingSourceIndirectAddressEXT.d.ts'
import type { VkDescriptorMappingSourceIndirectIndexArrayEXT } from '../../../org/lwjgl/vulkan/VkDescriptorMappingSourceIndirectIndexArrayEXT.d.ts'
import type { VkDescriptorMappingSourceIndirectIndexEXT } from '../../../org/lwjgl/vulkan/VkDescriptorMappingSourceIndirectIndexEXT.d.ts'
import type { VkDescriptorMappingSourcePushIndexEXT } from '../../../org/lwjgl/vulkan/VkDescriptorMappingSourcePushIndexEXT.d.ts'
import type { VkDescriptorMappingSourceShaderRecordIndexEXT } from '../../../org/lwjgl/vulkan/VkDescriptorMappingSourceShaderRecordIndexEXT.d.ts'
export class VkDescriptorMappingSourceDataEXT extends Struct<VkDescriptorMappingSourceDataEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONSTANTOFFSET: number;
    static HEAPDATA: number;
    static INDIRECTADDRESS: number;
    static INDIRECTINDEX: number;
    static INDIRECTINDEXARRAY: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PUSHADDRESSOFFSET: number;
    static PUSHDATAOFFSET: number;
    static PUSHINDEX: number;
    static SHADERRECORDADDRESSOFFSET: number;
    static SHADERRECORDDATAOFFSET: number;
    static SHADERRECORDINDEX: number;
    static SIZEOF: number;
    static calloc(): VkDescriptorMappingSourceDataEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorMappingSourceDataEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorMappingSourceDataEXT;
    static create(paramarg0: number): VkDescriptorMappingSourceDataEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorMappingSourceDataEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorMappingSourceDataEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorMappingSourceDataEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nconstantOffset(paramarg0: number): VkDescriptorMappingSourceConstantOffsetEXT;
    static nconstantOffset(paramarg0: number, paramarg1: VkDescriptorMappingSourceConstantOffsetEXT): void;
    static nheapData(paramarg0: number): VkDescriptorMappingSourceHeapDataEXT;
    static nheapData(paramarg0: number, paramarg1: VkDescriptorMappingSourceHeapDataEXT): void;
    static nindirectAddress(paramarg0: number): VkDescriptorMappingSourceIndirectAddressEXT;
    static nindirectAddress(paramarg0: number, paramarg1: VkDescriptorMappingSourceIndirectAddressEXT): void;
    static nindirectIndex(paramarg0: number): VkDescriptorMappingSourceIndirectIndexEXT;
    static nindirectIndex(paramarg0: number, paramarg1: VkDescriptorMappingSourceIndirectIndexEXT): void;
    static nindirectIndexArray(paramarg0: number): VkDescriptorMappingSourceIndirectIndexArrayEXT;
    static nindirectIndexArray(paramarg0: number, paramarg1: VkDescriptorMappingSourceIndirectIndexArrayEXT): void;
    static npushAddressOffset(paramarg0: number): number;
    static npushAddressOffset(paramarg0: number, paramarg1: number): void;
    static npushDataOffset(paramarg0: number): number;
    static npushDataOffset(paramarg0: number, paramarg1: number): void;
    static npushIndex(paramarg0: number): VkDescriptorMappingSourcePushIndexEXT;
    static npushIndex(paramarg0: number, paramarg1: VkDescriptorMappingSourcePushIndexEXT): void;
    static nshaderRecordAddressOffset(paramarg0: number): number;
    static nshaderRecordAddressOffset(paramarg0: number, paramarg1: number): void;
    static nshaderRecordDataOffset(paramarg0: number): number;
    static nshaderRecordDataOffset(paramarg0: number, paramarg1: number): void;
    static nshaderRecordIndex(paramarg0: number): VkDescriptorMappingSourceShaderRecordIndexEXT;
    static nshaderRecordIndex(paramarg0: number, paramarg1: VkDescriptorMappingSourceShaderRecordIndexEXT): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    constantOffset(): VkDescriptorMappingSourceConstantOffsetEXT;
    constantOffset(arg0: (param0: VkDescriptorMappingSourceConstantOffsetEXT) => void): VkDescriptorMappingSourceDataEXT;
    constantOffset(arg0: VkDescriptorMappingSourceConstantOffsetEXT): VkDescriptorMappingSourceDataEXT;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorMappingSourceDataEXT;
    heapData(): VkDescriptorMappingSourceHeapDataEXT;
    heapData(arg0: (param0: VkDescriptorMappingSourceHeapDataEXT) => void): VkDescriptorMappingSourceDataEXT;
    heapData(arg0: VkDescriptorMappingSourceHeapDataEXT): VkDescriptorMappingSourceDataEXT;
    indirectAddress(): VkDescriptorMappingSourceIndirectAddressEXT;
    indirectAddress(arg0: (param0: VkDescriptorMappingSourceIndirectAddressEXT) => void): VkDescriptorMappingSourceDataEXT;
    indirectAddress(arg0: VkDescriptorMappingSourceIndirectAddressEXT): VkDescriptorMappingSourceDataEXT;
    indirectIndex(): VkDescriptorMappingSourceIndirectIndexEXT;
    indirectIndex(arg0: (param0: VkDescriptorMappingSourceIndirectIndexEXT) => void): VkDescriptorMappingSourceDataEXT;
    indirectIndex(arg0: VkDescriptorMappingSourceIndirectIndexEXT): VkDescriptorMappingSourceDataEXT;
    indirectIndexArray(): VkDescriptorMappingSourceIndirectIndexArrayEXT;
    indirectIndexArray(arg0: (param0: VkDescriptorMappingSourceIndirectIndexArrayEXT) => void): VkDescriptorMappingSourceDataEXT;
    indirectIndexArray(arg0: VkDescriptorMappingSourceIndirectIndexArrayEXT): VkDescriptorMappingSourceDataEXT;
    pushAddressOffset(): number;
    pushAddressOffset(arg0: number): VkDescriptorMappingSourceDataEXT;
    pushDataOffset(): number;
    pushDataOffset(arg0: number): VkDescriptorMappingSourceDataEXT;
    pushIndex(): VkDescriptorMappingSourcePushIndexEXT;
    pushIndex(arg0: (param0: VkDescriptorMappingSourcePushIndexEXT) => void): VkDescriptorMappingSourceDataEXT;
    pushIndex(arg0: VkDescriptorMappingSourcePushIndexEXT): VkDescriptorMappingSourceDataEXT;
    set(arg0: VkDescriptorMappingSourceDataEXT): VkDescriptorMappingSourceDataEXT;
    shaderRecordAddressOffset(): number;
    shaderRecordAddressOffset(arg0: number): VkDescriptorMappingSourceDataEXT;
    shaderRecordDataOffset(): number;
    shaderRecordDataOffset(arg0: number): VkDescriptorMappingSourceDataEXT;
    shaderRecordIndex(): VkDescriptorMappingSourceShaderRecordIndexEXT;
    shaderRecordIndex(arg0: (param0: VkDescriptorMappingSourceShaderRecordIndexEXT) => void): VkDescriptorMappingSourceDataEXT;
    shaderRecordIndex(arg0: VkDescriptorMappingSourceShaderRecordIndexEXT): VkDescriptorMappingSourceDataEXT;
    sizeof(): number;
}