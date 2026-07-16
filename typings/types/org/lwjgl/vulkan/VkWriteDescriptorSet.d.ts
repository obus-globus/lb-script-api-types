import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkWriteDescriptorSetAccelerationStructureKHR } from '../../../org/lwjgl/vulkan/VkWriteDescriptorSetAccelerationStructureKHR.d.ts'
import type { VkWriteDescriptorSetAccelerationStructureNV } from '../../../org/lwjgl/vulkan/VkWriteDescriptorSetAccelerationStructureNV.d.ts'
import type { VkWriteDescriptorSetInlineUniformBlock } from '../../../org/lwjgl/vulkan/VkWriteDescriptorSetInlineUniformBlock.d.ts'
import type { VkWriteDescriptorSetInlineUniformBlockEXT } from '../../../org/lwjgl/vulkan/VkWriteDescriptorSetInlineUniformBlockEXT.d.ts'
import type { VkWriteDescriptorSetPartitionedAccelerationStructureNV } from '../../../org/lwjgl/vulkan/VkWriteDescriptorSetPartitionedAccelerationStructureNV.d.ts'
import type { VkWriteDescriptorSetTensorARM } from '../../../org/lwjgl/vulkan/VkWriteDescriptorSetTensorARM.d.ts'
export class VkWriteDescriptorSet extends Struct<VkWriteDescriptorSet> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORCOUNT: number;
    static DESCRIPTORTYPE: number;
    static DSTARRAYELEMENT: number;
    static DSTBINDING: number;
    static DSTSET: number;
    static PBUFFERINFO: number;
    static PIMAGEINFO: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTEXELBUFFERVIEW: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkWriteDescriptorSet;
    static calloc(paramarg0: MemoryStack): VkWriteDescriptorSet;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkWriteDescriptorSet;
    static create(paramarg0: number): VkWriteDescriptorSet;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkWriteDescriptorSet;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkWriteDescriptorSet;
    static malloc(paramarg0: MemoryStack): VkWriteDescriptorSet;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescriptorCount(paramarg0: number): number;
    static ndescriptorCount(paramarg0: number, paramarg1: number): void;
    static ndescriptorType(paramarg0: number): number;
    static ndescriptorType(paramarg0: number, paramarg1: number): void;
    static ndstArrayElement(paramarg0: number): number;
    static ndstArrayElement(paramarg0: number, paramarg1: number): void;
    static ndstBinding(paramarg0: number): number;
    static ndstBinding(paramarg0: number, paramarg1: number): void;
    static ndstSet(paramarg0: number): number;
    static ndstSet(paramarg0: number, paramarg1: number): void;
    static npBufferInfo(paramarg0: number): (Object | null)[];
    static npBufferInfo(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npImageInfo(paramarg0: number): (Object | null)[];
    static npImageInfo(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npTexelBufferView(paramarg0: number): LongBuffer;
    static npTexelBufferView(paramarg0: number, paramarg1: LongBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkWriteDescriptorSet;
    descriptorCount(): number;
    descriptorCount(arg0: number): VkWriteDescriptorSet;
    descriptorType(): number;
    descriptorType(arg0: number): VkWriteDescriptorSet;
    dstArrayElement(): number;
    dstArrayElement(arg0: number): VkWriteDescriptorSet;
    dstBinding(): number;
    dstBinding(arg0: number): VkWriteDescriptorSet;
    dstSet(): number;
    dstSet(arg0: number): VkWriteDescriptorSet;
    pBufferInfo(): (Object | null)[];
    pBufferInfo(arg0: (Object | null)[]): VkWriteDescriptorSet;
    pImageInfo(): (Object | null)[];
    pImageInfo(arg0: (Object | null)[]): VkWriteDescriptorSet;
    pNext(): number;
    pNext(arg0: number): VkWriteDescriptorSet;
    pNext(arg0: VkWriteDescriptorSetAccelerationStructureKHR): VkWriteDescriptorSet;
    pNext(arg0: VkWriteDescriptorSetAccelerationStructureNV): VkWriteDescriptorSet;
    pNext(arg0: VkWriteDescriptorSetInlineUniformBlock): VkWriteDescriptorSet;
    pNext(arg0: VkWriteDescriptorSetInlineUniformBlockEXT): VkWriteDescriptorSet;
    pNext(arg0: VkWriteDescriptorSetPartitionedAccelerationStructureNV): VkWriteDescriptorSet;
    pNext(arg0: VkWriteDescriptorSetTensorARM): VkWriteDescriptorSet;
    pTexelBufferView(): LongBuffer;
    pTexelBufferView(arg0: LongBuffer): VkWriteDescriptorSet;
    sType(): number;
    sType(arg0: number): VkWriteDescriptorSet;
    sType$Default(): VkWriteDescriptorSet;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: (Object | null)[], arg8: (Object | null)[], arg9: LongBuffer): VkWriteDescriptorSet;
    set(arg0: VkWriteDescriptorSet): VkWriteDescriptorSet;
    sizeof(): number;
}