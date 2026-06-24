import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineLayoutCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineLayoutCreateInfo.d.ts'
import type { VkPushDescriptorSetInfo } from '../../../org/lwjgl/vulkan/VkPushDescriptorSetInfo.d.ts'
export class VkPushDescriptorSetInfoKHR extends VkPushDescriptorSetInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTORWRITECOUNT: number;
    static LAYOUT: number;
    static PDESCRIPTORWRITES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SET: number;
    static SIZEOF: number;
    static STAGEFLAGS: number;
    static STYPE: number;
    static calloc(): VkPushDescriptorSetInfo;
    static calloc(paramarg0: MemoryStack): VkPushDescriptorSetInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPushDescriptorSetInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPushDescriptorSetInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPushDescriptorSetInfo;
    static create(paramarg0: number): VkPushDescriptorSetInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPushDescriptorSetInfoKHR;
    static create(paramarg0: number): VkPushDescriptorSetInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPushDescriptorSetInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPushDescriptorSetInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPushDescriptorSetInfo;
    static malloc(paramarg0: MemoryStack): VkPushDescriptorSetInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPushDescriptorSetInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPushDescriptorSetInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescriptorWriteCount(paramarg0: number): number;
    static ndescriptorWriteCount(paramarg0: number, paramarg1: number): void;
    static nlayout(paramarg0: number): number;
    static nlayout(paramarg0: number, paramarg1: number): void;
    static npDescriptorWrites(paramarg0: number): (Object | null)[];
    static npDescriptorWrites(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nset(paramarg0: number): number;
    static nset(paramarg0: number, paramarg1: number): void;
    static nstageFlags(paramarg0: number): number;
    static nstageFlags(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPushDescriptorSetInfoKHR;
    layout(): number;
    layout(arg0: number): VkPushDescriptorSetInfoKHR;
    pDescriptorWrites(): (Object | null)[];
    pDescriptorWrites(arg0: (Object | null)[]): VkPushDescriptorSetInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPushDescriptorSetInfoKHR;
    pNext(arg0: VkPipelineLayoutCreateInfo): VkPushDescriptorSetInfo;
    sType(): number;
    sType(arg0: number): VkPushDescriptorSetInfoKHR;
    sType$Default(): VkPushDescriptorSetInfoKHR;
    set(): number;
    set(arg0: number): VkPushDescriptorSetInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: (Object | null)[]): VkPushDescriptorSetInfoKHR;
    set(arg0: VkPushDescriptorSetInfo): VkPushDescriptorSetInfo;
    set(arg0: VkPushDescriptorSetInfoKHR): VkPushDescriptorSetInfoKHR;
    stageFlags(): number;
    stageFlags(arg0: number): VkPushDescriptorSetInfoKHR;
}