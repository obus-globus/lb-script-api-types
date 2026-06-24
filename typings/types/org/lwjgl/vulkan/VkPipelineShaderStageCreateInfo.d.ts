import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDebugUtilsObjectNameInfoEXT } from '../../../org/lwjgl/vulkan/VkDebugUtilsObjectNameInfoEXT.d.ts'
import type { VkPipelineRobustnessCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineRobustnessCreateInfo.d.ts'
import type { VkPipelineRobustnessCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineRobustnessCreateInfoEXT.d.ts'
import type { VkPipelineShaderStageModuleIdentifierCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineShaderStageModuleIdentifierCreateInfoEXT.d.ts'
import type { VkPipelineShaderStageNodeCreateInfoAMDX } from '../../../org/lwjgl/vulkan/VkPipelineShaderStageNodeCreateInfoAMDX.d.ts'
import type { VkPipelineShaderStageRequiredSubgroupSizeCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineShaderStageRequiredSubgroupSizeCreateInfo.d.ts'
import type { VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT.d.ts'
import type { VkShaderDescriptorSetAndBindingMappingInfoEXT } from '../../../org/lwjgl/vulkan/VkShaderDescriptorSetAndBindingMappingInfoEXT.d.ts'
import type { VkShaderModuleCreateInfo } from '../../../org/lwjgl/vulkan/VkShaderModuleCreateInfo.d.ts'
import type { VkShaderModuleValidationCacheCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkShaderModuleValidationCacheCreateInfoEXT.d.ts'
import type { VkShaderRequiredSubgroupSizeCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkShaderRequiredSubgroupSizeCreateInfoEXT.d.ts'
import type { VkSpecializationInfo } from '../../../org/lwjgl/vulkan/VkSpecializationInfo.d.ts'
export class VkPipelineShaderStageCreateInfo extends Struct<VkPipelineShaderStageCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static MODULE: number;
    static PNAME: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSPECIALIZATIONINFO: number;
    static SIZEOF: number;
    static STAGE: number;
    static STYPE: number;
    static calloc(): VkPipelineShaderStageCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineShaderStageCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineShaderStageCreateInfo;
    static create(paramarg0: number): VkPipelineShaderStageCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineShaderStageCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineShaderStageCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineShaderStageCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmodule(paramarg0: number): number;
    static nmodule(paramarg0: number, paramarg1: number): void;
    static npName(paramarg0: number): ByteBuffer;
    static npName(paramarg0: number, paramarg1: ByteBuffer): void;
    static npNameString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSpecializationInfo(paramarg0: number): VkSpecializationInfo;
    static npSpecializationInfo(paramarg0: number, paramarg1: VkSpecializationInfo): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstage(paramarg0: number): number;
    static nstage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineShaderStageCreateInfo;
    flags(): number;
    flags(arg0: number): VkPipelineShaderStageCreateInfo;
    module(): number;
    module(arg0: number): VkPipelineShaderStageCreateInfo;
    pName(): ByteBuffer;
    pName(arg0: ByteBuffer): VkPipelineShaderStageCreateInfo;
    pNameString(): string;
    pNext(): number;
    pNext(arg0: number): VkPipelineShaderStageCreateInfo;
    pNext(arg0: VkDebugUtilsObjectNameInfoEXT): VkPipelineShaderStageCreateInfo;
    pNext(arg0: VkPipelineRobustnessCreateInfo): VkPipelineShaderStageCreateInfo;
    pNext(arg0: VkPipelineRobustnessCreateInfoEXT): VkPipelineShaderStageCreateInfo;
    pNext(arg0: VkPipelineShaderStageModuleIdentifierCreateInfoEXT): VkPipelineShaderStageCreateInfo;
    pNext(arg0: VkPipelineShaderStageNodeCreateInfoAMDX): VkPipelineShaderStageCreateInfo;
    pNext(arg0: VkPipelineShaderStageRequiredSubgroupSizeCreateInfo): VkPipelineShaderStageCreateInfo;
    pNext(arg0: VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT): VkPipelineShaderStageCreateInfo;
    pNext(arg0: VkShaderDescriptorSetAndBindingMappingInfoEXT): VkPipelineShaderStageCreateInfo;
    pNext(arg0: VkShaderModuleCreateInfo): VkPipelineShaderStageCreateInfo;
    pNext(arg0: VkShaderModuleValidationCacheCreateInfoEXT): VkPipelineShaderStageCreateInfo;
    pNext(arg0: VkShaderRequiredSubgroupSizeCreateInfoEXT): VkPipelineShaderStageCreateInfo;
    pSpecializationInfo(): VkSpecializationInfo;
    pSpecializationInfo(arg0: VkSpecializationInfo): VkPipelineShaderStageCreateInfo;
    sType(): number;
    sType(arg0: number): VkPipelineShaderStageCreateInfo;
    sType$Default(): VkPipelineShaderStageCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: ByteBuffer, arg6: VkSpecializationInfo): VkPipelineShaderStageCreateInfo;
    set(arg0: VkPipelineShaderStageCreateInfo): VkPipelineShaderStageCreateInfo;
    sizeof(): number;
    stage(): number;
    stage(arg0: number): VkPipelineShaderStageCreateInfo;
}