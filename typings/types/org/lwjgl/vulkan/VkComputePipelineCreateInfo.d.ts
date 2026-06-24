import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkComputePipelineIndirectBufferInfoNV } from '../../../org/lwjgl/vulkan/VkComputePipelineIndirectBufferInfoNV.d.ts'
import type { VkPipelineBinaryInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineBinaryInfoKHR.d.ts'
import type { VkPipelineCompilerControlCreateInfoAMD } from '../../../org/lwjgl/vulkan/VkPipelineCompilerControlCreateInfoAMD.d.ts'
import type { VkPipelineCreateFlags2CreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineCreateFlags2CreateInfo.d.ts'
import type { VkPipelineCreateFlags2CreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineCreateFlags2CreateInfoKHR.d.ts'
import type { VkPipelineCreationFeedbackCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedbackCreateInfo.d.ts'
import type { VkPipelineCreationFeedbackCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedbackCreateInfoEXT.d.ts'
import type { VkPipelineRobustnessCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineRobustnessCreateInfo.d.ts'
import type { VkPipelineRobustnessCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineRobustnessCreateInfoEXT.d.ts'
import type { VkPipelineShaderStageCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineShaderStageCreateInfo.d.ts'
import type { VkSubpassShadingPipelineCreateInfoHUAWEI } from '../../../org/lwjgl/vulkan/VkSubpassShadingPipelineCreateInfoHUAWEI.d.ts'
export class VkComputePipelineCreateInfo extends Struct<VkComputePipelineCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BASEPIPELINEHANDLE: number;
    static BASEPIPELINEINDEX: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static LAYOUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STAGE: number;
    static STYPE: number;
    static calloc(): VkComputePipelineCreateInfo;
    static calloc(paramarg0: MemoryStack): VkComputePipelineCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkComputePipelineCreateInfo;
    static create(paramarg0: number): VkComputePipelineCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkComputePipelineCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkComputePipelineCreateInfo;
    static malloc(paramarg0: MemoryStack): VkComputePipelineCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbasePipelineHandle(paramarg0: number): number;
    static nbasePipelineHandle(paramarg0: number, paramarg1: number): void;
    static nbasePipelineIndex(paramarg0: number): number;
    static nbasePipelineIndex(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nlayout(paramarg0: number): number;
    static nlayout(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstage(paramarg0: number): VkPipelineShaderStageCreateInfo;
    static nstage(paramarg0: number, paramarg1: VkPipelineShaderStageCreateInfo): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    basePipelineHandle(): number;
    basePipelineHandle(arg0: number): VkComputePipelineCreateInfo;
    basePipelineIndex(): number;
    basePipelineIndex(arg0: number): VkComputePipelineCreateInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkComputePipelineCreateInfo;
    flags(): number;
    flags(arg0: number): VkComputePipelineCreateInfo;
    layout(): number;
    layout(arg0: number): VkComputePipelineCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkComputePipelineCreateInfo;
    pNext(arg0: VkComputePipelineIndirectBufferInfoNV): VkComputePipelineCreateInfo;
    pNext(arg0: VkPipelineBinaryInfoKHR): VkComputePipelineCreateInfo;
    pNext(arg0: VkPipelineCompilerControlCreateInfoAMD): VkComputePipelineCreateInfo;
    pNext(arg0: VkPipelineCreateFlags2CreateInfo): VkComputePipelineCreateInfo;
    pNext(arg0: VkPipelineCreateFlags2CreateInfoKHR): VkComputePipelineCreateInfo;
    pNext(arg0: VkPipelineCreationFeedbackCreateInfo): VkComputePipelineCreateInfo;
    pNext(arg0: VkPipelineCreationFeedbackCreateInfoEXT): VkComputePipelineCreateInfo;
    pNext(arg0: VkPipelineRobustnessCreateInfo): VkComputePipelineCreateInfo;
    pNext(arg0: VkPipelineRobustnessCreateInfoEXT): VkComputePipelineCreateInfo;
    pNext(arg0: VkSubpassShadingPipelineCreateInfoHUAWEI): VkComputePipelineCreateInfo;
    sType(): number;
    sType(arg0: number): VkComputePipelineCreateInfo;
    sType$Default(): VkComputePipelineCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: VkPipelineShaderStageCreateInfo, arg4: number, arg5: number, arg6: number): VkComputePipelineCreateInfo;
    set(arg0: VkComputePipelineCreateInfo): VkComputePipelineCreateInfo;
    sizeof(): number;
    stage(): VkPipelineShaderStageCreateInfo;
    stage(arg0: (param0: VkPipelineShaderStageCreateInfo) => void): VkComputePipelineCreateInfo;
    stage(arg0: VkPipelineShaderStageCreateInfo): VkComputePipelineCreateInfo;
}