import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineShaderStageRequiredSubgroupSizeCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineShaderStageRequiredSubgroupSizeCreateInfo.d.ts'
export class VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT extends VkPipelineShaderStageRequiredSubgroupSizeCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REQUIREDSUBGROUPSIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineShaderStageRequiredSubgroupSizeCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineShaderStageRequiredSubgroupSizeCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineShaderStageRequiredSubgroupSizeCreateInfo;
    static create(paramarg0: number): VkPipelineShaderStageRequiredSubgroupSizeCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
    static create(paramarg0: number): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineShaderStageRequiredSubgroupSizeCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineShaderStageRequiredSubgroupSizeCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineShaderStageRequiredSubgroupSizeCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrequiredSubgroupSize(paramarg0: number): number;
    static nrequiredSubgroupSize(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
    requiredSubgroupSize(): number;
    requiredSubgroupSize(arg0: number): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
    sType$Default(): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
    set(arg0: VkPipelineShaderStageRequiredSubgroupSizeCreateInfo): VkPipelineShaderStageRequiredSubgroupSizeCreateInfo;
    set(arg0: VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT): VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT;
}