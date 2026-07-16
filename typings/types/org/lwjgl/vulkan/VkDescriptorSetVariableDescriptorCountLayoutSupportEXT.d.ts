import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDescriptorSetVariableDescriptorCountLayoutSupport } from '../../../org/lwjgl/vulkan/VkDescriptorSetVariableDescriptorCountLayoutSupport.d.ts'
export class VkDescriptorSetVariableDescriptorCountLayoutSupportEXT extends VkDescriptorSetVariableDescriptorCountLayoutSupport {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXVARIABLEDESCRIPTORCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDescriptorSetVariableDescriptorCountLayoutSupport;
    static calloc(paramarg0: MemoryStack): VkDescriptorSetVariableDescriptorCountLayoutSupport;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkDescriptorSetVariableDescriptorCountLayoutSupportEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorSetVariableDescriptorCountLayoutSupportEXT;
    static create(): VkDescriptorSetVariableDescriptorCountLayoutSupport;
    static create(paramarg0: number): VkDescriptorSetVariableDescriptorCountLayoutSupport;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkDescriptorSetVariableDescriptorCountLayoutSupportEXT;
    static create(paramarg0: number): VkDescriptorSetVariableDescriptorCountLayoutSupportEXT;
    static createSafe(paramarg0: number): VkDescriptorSetVariableDescriptorCountLayoutSupport;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorSetVariableDescriptorCountLayoutSupportEXT;
    static malloc(): VkDescriptorSetVariableDescriptorCountLayoutSupport;
    static malloc(paramarg0: MemoryStack): VkDescriptorSetVariableDescriptorCountLayoutSupport;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkDescriptorSetVariableDescriptorCountLayoutSupportEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorSetVariableDescriptorCountLayoutSupportEXT;
    static nmaxVariableDescriptorCount(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkDescriptorSetVariableDescriptorCountLayoutSupportEXT;
    pNext(): number;
    pNext(arg0: number): VkDescriptorSetVariableDescriptorCountLayoutSupportEXT;
    sType(): number;
    sType(arg0: number): VkDescriptorSetVariableDescriptorCountLayoutSupportEXT;
    sType$Default(): VkDescriptorSetVariableDescriptorCountLayoutSupportEXT;
    set(arg0: number, arg1: number): VkDescriptorSetVariableDescriptorCountLayoutSupportEXT;
    set(arg0: VkDescriptorSetVariableDescriptorCountLayoutSupport): VkDescriptorSetVariableDescriptorCountLayoutSupport;
    set(arg0: VkDescriptorSetVariableDescriptorCountLayoutSupportEXT): VkDescriptorSetVariableDescriptorCountLayoutSupportEXT;
}