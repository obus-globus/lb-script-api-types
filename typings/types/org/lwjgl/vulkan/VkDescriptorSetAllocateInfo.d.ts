import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDescriptorSetVariableDescriptorCountAllocateInfo } from '../../../org/lwjgl/vulkan/VkDescriptorSetVariableDescriptorCountAllocateInfo.d.ts'
import type { VkDescriptorSetVariableDescriptorCountAllocateInfoEXT } from '../../../org/lwjgl/vulkan/VkDescriptorSetVariableDescriptorCountAllocateInfoEXT.d.ts'
export class VkDescriptorSetAllocateInfo extends Struct<VkDescriptorSetAllocateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORPOOL: number;
    static DESCRIPTORSETCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSETLAYOUTS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDescriptorSetAllocateInfo;
    static calloc(paramarg0: MemoryStack): VkDescriptorSetAllocateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorSetAllocateInfo;
    static create(paramarg0: number): VkDescriptorSetAllocateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorSetAllocateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorSetAllocateInfo;
    static malloc(paramarg0: MemoryStack): VkDescriptorSetAllocateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescriptorPool(paramarg0: number): number;
    static ndescriptorPool(paramarg0: number, paramarg1: number): void;
    static ndescriptorSetCount(paramarg0: number): number;
    static ndescriptorSetCount(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSetLayouts(paramarg0: number): LongBuffer;
    static npSetLayouts(paramarg0: number, paramarg1: LongBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorSetAllocateInfo;
    descriptorPool(): number;
    descriptorPool(arg0: number): VkDescriptorSetAllocateInfo;
    descriptorSetCount(): number;
    pNext(): number;
    pNext(arg0: number): VkDescriptorSetAllocateInfo;
    pNext(arg0: VkDescriptorSetVariableDescriptorCountAllocateInfo): VkDescriptorSetAllocateInfo;
    pNext(arg0: VkDescriptorSetVariableDescriptorCountAllocateInfoEXT): VkDescriptorSetAllocateInfo;
    pSetLayouts(): LongBuffer;
    pSetLayouts(arg0: LongBuffer): VkDescriptorSetAllocateInfo;
    sType(): number;
    sType(arg0: number): VkDescriptorSetAllocateInfo;
    sType$Default(): VkDescriptorSetAllocateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer): VkDescriptorSetAllocateInfo;
    set(arg0: VkDescriptorSetAllocateInfo): VkDescriptorSetAllocateInfo;
    sizeof(): number;
}