import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDataGraphPipelineBuiltinModelCreateInfoQCOM } from '../../../org/lwjgl/vulkan/VkDataGraphPipelineBuiltinModelCreateInfoQCOM.d.ts'
import type { VkDataGraphPipelineCompilerControlCreateInfoARM } from '../../../org/lwjgl/vulkan/VkDataGraphPipelineCompilerControlCreateInfoARM.d.ts'
import type { VkDataGraphPipelineIdentifierCreateInfoARM } from '../../../org/lwjgl/vulkan/VkDataGraphPipelineIdentifierCreateInfoARM.d.ts'
import type { VkDataGraphPipelineShaderModuleCreateInfoARM } from '../../../org/lwjgl/vulkan/VkDataGraphPipelineShaderModuleCreateInfoARM.d.ts'
import type { VkDataGraphProcessingEngineCreateInfoARM } from '../../../org/lwjgl/vulkan/VkDataGraphProcessingEngineCreateInfoARM.d.ts'
import type { VkPipelineCreationFeedbackCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedbackCreateInfo.d.ts'
import type { VkPipelineCreationFeedbackCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedbackCreateInfoEXT.d.ts'
import type { VkShaderModuleCreateInfo } from '../../../org/lwjgl/vulkan/VkShaderModuleCreateInfo.d.ts'
export class VkDataGraphPipelineCreateInfoARM extends Struct<VkDataGraphPipelineCreateInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static LAYOUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESOURCEINFOS: number;
    static RESOURCEINFOCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDataGraphPipelineCreateInfoARM;
    static calloc(paramarg0: MemoryStack): VkDataGraphPipelineCreateInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDataGraphPipelineCreateInfoARM;
    static create(paramarg0: number): VkDataGraphPipelineCreateInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDataGraphPipelineCreateInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDataGraphPipelineCreateInfoARM;
    static malloc(paramarg0: MemoryStack): VkDataGraphPipelineCreateInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nlayout(paramarg0: number): number;
    static nlayout(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npResourceInfos(paramarg0: number): (Object | null)[];
    static npResourceInfos(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nresourceInfoCount(paramarg0: number): number;
    static nresourceInfoCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDataGraphPipelineCreateInfoARM;
    flags(): number;
    flags(arg0: number): VkDataGraphPipelineCreateInfoARM;
    layout(): number;
    layout(arg0: number): VkDataGraphPipelineCreateInfoARM;
    pNext(): number;
    pNext(arg0: number): VkDataGraphPipelineCreateInfoARM;
    pNext(arg0: VkDataGraphPipelineBuiltinModelCreateInfoQCOM): VkDataGraphPipelineCreateInfoARM;
    pNext(arg0: VkDataGraphPipelineCompilerControlCreateInfoARM): VkDataGraphPipelineCreateInfoARM;
    pNext(arg0: VkDataGraphPipelineIdentifierCreateInfoARM): VkDataGraphPipelineCreateInfoARM;
    pNext(arg0: VkDataGraphPipelineShaderModuleCreateInfoARM): VkDataGraphPipelineCreateInfoARM;
    pNext(arg0: VkDataGraphProcessingEngineCreateInfoARM): VkDataGraphPipelineCreateInfoARM;
    pNext(arg0: VkPipelineCreationFeedbackCreateInfo): VkDataGraphPipelineCreateInfoARM;
    pNext(arg0: VkPipelineCreationFeedbackCreateInfoEXT): VkDataGraphPipelineCreateInfoARM;
    pNext(arg0: VkShaderModuleCreateInfo): VkDataGraphPipelineCreateInfoARM;
    pResourceInfos(): (Object | null)[];
    pResourceInfos(arg0: (Object | null)[]): VkDataGraphPipelineCreateInfoARM;
    resourceInfoCount(): number;
    sType(): number;
    sType(arg0: number): VkDataGraphPipelineCreateInfoARM;
    sType$Default(): VkDataGraphPipelineCreateInfoARM;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (Object | null)[]): VkDataGraphPipelineCreateInfoARM;
    set(arg0: VkDataGraphPipelineCreateInfoARM): VkDataGraphPipelineCreateInfoARM;
    sizeof(): number;
}