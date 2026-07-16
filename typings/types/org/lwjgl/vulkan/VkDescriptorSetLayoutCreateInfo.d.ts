import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDescriptorSetLayoutBindingFlagsCreateInfo } from '../../../org/lwjgl/vulkan/VkDescriptorSetLayoutBindingFlagsCreateInfo.d.ts'
import type { VkDescriptorSetLayoutBindingFlagsCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkDescriptorSetLayoutBindingFlagsCreateInfoEXT.d.ts'
import type { VkMutableDescriptorTypeCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkMutableDescriptorTypeCreateInfoEXT.d.ts'
import type { VkMutableDescriptorTypeCreateInfoVALVE } from '../../../org/lwjgl/vulkan/VkMutableDescriptorTypeCreateInfoVALVE.d.ts'
export class VkDescriptorSetLayoutCreateInfo extends Struct<VkDescriptorSetLayoutCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BINDINGCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PBINDINGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDescriptorSetLayoutCreateInfo;
    static calloc(paramarg0: MemoryStack): VkDescriptorSetLayoutCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorSetLayoutCreateInfo;
    static create(paramarg0: number): VkDescriptorSetLayoutCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorSetLayoutCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorSetLayoutCreateInfo;
    static malloc(paramarg0: MemoryStack): VkDescriptorSetLayoutCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbindingCount(paramarg0: number): number;
    static nbindingCount(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npBindings(paramarg0: number): (Object | null)[];
    static npBindings(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bindingCount(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorSetLayoutCreateInfo;
    flags(): number;
    flags(arg0: number): VkDescriptorSetLayoutCreateInfo;
    pBindings(): (Object | null)[];
    pBindings(arg0: (Object | null)[]): VkDescriptorSetLayoutCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkDescriptorSetLayoutCreateInfo;
    pNext(arg0: VkDescriptorSetLayoutBindingFlagsCreateInfo): VkDescriptorSetLayoutCreateInfo;
    pNext(arg0: VkDescriptorSetLayoutBindingFlagsCreateInfoEXT): VkDescriptorSetLayoutCreateInfo;
    pNext(arg0: VkMutableDescriptorTypeCreateInfoEXT): VkDescriptorSetLayoutCreateInfo;
    pNext(arg0: VkMutableDescriptorTypeCreateInfoVALVE): VkDescriptorSetLayoutCreateInfo;
    sType(): number;
    sType(arg0: number): VkDescriptorSetLayoutCreateInfo;
    sType$Default(): VkDescriptorSetLayoutCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[]): VkDescriptorSetLayoutCreateInfo;
    set(arg0: VkDescriptorSetLayoutCreateInfo): VkDescriptorSetLayoutCreateInfo;
    sizeof(): number;
}