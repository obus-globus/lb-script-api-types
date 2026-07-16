import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkCustomResolveCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkCustomResolveCreateInfoEXT.d.ts'
import type { VkPipelineShaderStageRequiredSubgroupSizeCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineShaderStageRequiredSubgroupSizeCreateInfo.d.ts'
import type { VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT.d.ts'
import type { VkShaderDescriptorSetAndBindingMappingInfoEXT } from '../../../org/lwjgl/vulkan/VkShaderDescriptorSetAndBindingMappingInfoEXT.d.ts'
import type { VkShaderRequiredSubgroupSizeCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkShaderRequiredSubgroupSizeCreateInfoEXT.d.ts'
import type { VkSpecializationInfo } from '../../../org/lwjgl/vulkan/VkSpecializationInfo.d.ts'
import type { VkValidationFeaturesEXT } from '../../../org/lwjgl/vulkan/VkValidationFeaturesEXT.d.ts'
export class VkShaderCreateInfoEXT extends Struct<VkShaderCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CODESIZE: number;
    static CODETYPE: number;
    static FLAGS: number;
    static NEXTSTAGE: number;
    static PCODE: number;
    static PNAME: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPUSHCONSTANTRANGES: number;
    static PSETLAYOUTS: number;
    static PSPECIALIZATIONINFO: number;
    static PUSHCONSTANTRANGECOUNT: number;
    static SETLAYOUTCOUNT: number;
    static SIZEOF: number;
    static STAGE: number;
    static STYPE: number;
    static calloc(): VkShaderCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkShaderCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkShaderCreateInfoEXT;
    static create(paramarg0: number): VkShaderCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkShaderCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkShaderCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkShaderCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncodeSize(paramarg0: number): number;
    static ncodeSize(paramarg0: number, paramarg1: number): void;
    static ncodeType(paramarg0: number): number;
    static ncodeType(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nnextStage(paramarg0: number): number;
    static nnextStage(paramarg0: number, paramarg1: number): void;
    static npCode(paramarg0: number): ByteBuffer;
    static npCode(paramarg0: number, paramarg1: ByteBuffer): void;
    static npName(paramarg0: number): ByteBuffer;
    static npName(paramarg0: number, paramarg1: ByteBuffer): void;
    static npNameString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPushConstantRanges(paramarg0: number): (Object | null)[];
    static npPushConstantRanges(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npSetLayouts(paramarg0: number): LongBuffer;
    static npSetLayouts(paramarg0: number, paramarg1: LongBuffer): void;
    static npSpecializationInfo(paramarg0: number): VkSpecializationInfo;
    static npSpecializationInfo(paramarg0: number, paramarg1: VkSpecializationInfo): void;
    static npushConstantRangeCount(paramarg0: number): number;
    static npushConstantRangeCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsetLayoutCount(paramarg0: number): number;
    static nsetLayoutCount(paramarg0: number, paramarg1: number): void;
    static nstage(paramarg0: number): number;
    static nstage(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    codeSize(): number;
    codeType(): number;
    codeType(arg0: number): VkShaderCreateInfoEXT;
    create(arg0: number, arg1: ByteBuffer): VkShaderCreateInfoEXT;
    flags(): number;
    flags(arg0: number): VkShaderCreateInfoEXT;
    nextStage(): number;
    nextStage(arg0: number): VkShaderCreateInfoEXT;
    pCode(): ByteBuffer;
    pCode(arg0: ByteBuffer): VkShaderCreateInfoEXT;
    pName(): ByteBuffer;
    pName(arg0: ByteBuffer): VkShaderCreateInfoEXT;
    pNameString(): string;
    pNext(): number;
    pNext(arg0: number): VkShaderCreateInfoEXT;
    pNext(arg0: VkCustomResolveCreateInfoEXT): VkShaderCreateInfoEXT;
    pNext(arg0: VkPipelineShaderStageRequiredSubgroupSizeCreateInfo): VkShaderCreateInfoEXT;
    pNext(arg0: VkPipelineShaderStageRequiredSubgroupSizeCreateInfoEXT): VkShaderCreateInfoEXT;
    pNext(arg0: VkShaderDescriptorSetAndBindingMappingInfoEXT): VkShaderCreateInfoEXT;
    pNext(arg0: VkShaderRequiredSubgroupSizeCreateInfoEXT): VkShaderCreateInfoEXT;
    pNext(arg0: VkValidationFeaturesEXT): VkShaderCreateInfoEXT;
    pPushConstantRanges(): (Object | null)[];
    pPushConstantRanges(arg0: (Object | null)[]): VkShaderCreateInfoEXT;
    pSetLayouts(): LongBuffer;
    pSetLayouts(arg0: LongBuffer): VkShaderCreateInfoEXT;
    pSpecializationInfo(): VkSpecializationInfo;
    pSpecializationInfo(arg0: VkSpecializationInfo): VkShaderCreateInfoEXT;
    pushConstantRangeCount(): number;
    pushConstantRangeCount(arg0: number): VkShaderCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkShaderCreateInfoEXT;
    sType$Default(): VkShaderCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: ByteBuffer, arg7: ByteBuffer, arg8: number, arg9: LongBuffer, arg10: number, arg11: (Object | null)[], arg12: VkSpecializationInfo): VkShaderCreateInfoEXT;
    set(arg0: VkShaderCreateInfoEXT): VkShaderCreateInfoEXT;
    setLayoutCount(): number;
    setLayoutCount(arg0: number): VkShaderCreateInfoEXT;
    sizeof(): number;
    stage(): number;
    stage(arg0: number): VkShaderCreateInfoEXT;
}