import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDescriptorSetVariableDescriptorCountAllocateInfo } from '../../../org/lwjgl/vulkan/VkDescriptorSetVariableDescriptorCountAllocateInfo.d.ts'
export class VkDescriptorSetVariableDescriptorCountAllocateInfoEXT extends VkDescriptorSetVariableDescriptorCountAllocateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORSETCOUNT: number;
    static PDESCRIPTORCOUNTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDescriptorSetVariableDescriptorCountAllocateInfo;
    static calloc(paramarg0: MemoryStack): VkDescriptorSetVariableDescriptorCountAllocateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
    static create(): VkDescriptorSetVariableDescriptorCountAllocateInfo;
    static create(paramarg0: number): VkDescriptorSetVariableDescriptorCountAllocateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
    static create(paramarg0: number): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
    static createSafe(paramarg0: number): VkDescriptorSetVariableDescriptorCountAllocateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
    static malloc(): VkDescriptorSetVariableDescriptorCountAllocateInfo;
    static malloc(paramarg0: MemoryStack): VkDescriptorSetVariableDescriptorCountAllocateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
    static ndescriptorSetCount(paramarg0: number): number;
    static ndescriptorSetCount(paramarg0: number, paramarg1: number): void;
    static npDescriptorCounts(paramarg0: number): IntBuffer;
    static npDescriptorCounts(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
    pDescriptorCounts(): IntBuffer;
    pDescriptorCounts(arg0: IntBuffer): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
    sType(): number;
    sType(arg0: number): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
    sType$Default(): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
    set(arg0: number, arg1: number, arg2: IntBuffer): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
    set(arg0: VkDescriptorSetVariableDescriptorCountAllocateInfo): VkDescriptorSetVariableDescriptorCountAllocateInfo;
    set(arg0: VkDescriptorSetVariableDescriptorCountAllocateInfoEXT): VkDescriptorSetVariableDescriptorCountAllocateInfoEXT;
}