import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDescriptorSetLayoutBindingFlagsCreateInfo } from '../../../org/lwjgl/vulkan/VkDescriptorSetLayoutBindingFlagsCreateInfo.d.ts'
export class VkDescriptorSetLayoutBindingFlagsCreateInfoEXT extends VkDescriptorSetLayoutBindingFlagsCreateInfo {
    static ALIGNOF: number;
    static BINDINGCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PBINDINGFLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDescriptorSetLayoutBindingFlagsCreateInfo;
    static calloc(paramarg0: MemoryStack): VkDescriptorSetLayoutBindingFlagsCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    static create(): VkDescriptorSetLayoutBindingFlagsCreateInfo;
    static create(paramarg0: number): VkDescriptorSetLayoutBindingFlagsCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    static create(paramarg0: number): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    static createSafe(paramarg0: number): VkDescriptorSetLayoutBindingFlagsCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    static malloc(): VkDescriptorSetLayoutBindingFlagsCreateInfo;
    static malloc(paramarg0: MemoryStack): VkDescriptorSetLayoutBindingFlagsCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    static nbindingCount(paramarg0: number): number;
    static nbindingCount(paramarg0: number, paramarg1: number): void;
    static npBindingFlags(paramarg0: number): IntBuffer;
    static npBindingFlags(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bindingCount(): number;
    bindingCount(arg0: number): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    pBindingFlags(): IntBuffer;
    pBindingFlags(arg0: IntBuffer): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    sType$Default(): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: IntBuffer): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
    set(arg0: VkDescriptorSetLayoutBindingFlagsCreateInfo): VkDescriptorSetLayoutBindingFlagsCreateInfo;
    set(arg0: VkDescriptorSetLayoutBindingFlagsCreateInfoEXT): VkDescriptorSetLayoutBindingFlagsCreateInfoEXT;
}