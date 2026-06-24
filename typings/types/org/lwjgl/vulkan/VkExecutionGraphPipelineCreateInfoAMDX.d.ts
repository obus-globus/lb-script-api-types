import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineCompilerControlCreateInfoAMD } from '../../../org/lwjgl/vulkan/VkPipelineCompilerControlCreateInfoAMD.d.ts'
import type { VkPipelineCreationFeedbackCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedbackCreateInfo.d.ts'
import type { VkPipelineCreationFeedbackCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedbackCreateInfoEXT.d.ts'
import type { VkPipelineLibraryCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineLibraryCreateInfoKHR.d.ts'
export class VkExecutionGraphPipelineCreateInfoAMDX extends Struct<VkExecutionGraphPipelineCreateInfoAMDX> implements NativeResource {
    static ALIGNOF: number;
    static BASEPIPELINEHANDLE: number;
    static BASEPIPELINEINDEX: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static LAYOUT: number;
    static PLIBRARYINFO: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTAGES: number;
    static SIZEOF: number;
    static STAGECOUNT: number;
    static STYPE: number;
    static calloc(): VkExecutionGraphPipelineCreateInfoAMDX;
    static calloc(paramarg0: MemoryStack): VkExecutionGraphPipelineCreateInfoAMDX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkExecutionGraphPipelineCreateInfoAMDX;
    static create(paramarg0: number): VkExecutionGraphPipelineCreateInfoAMDX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkExecutionGraphPipelineCreateInfoAMDX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkExecutionGraphPipelineCreateInfoAMDX;
    static malloc(paramarg0: MemoryStack): VkExecutionGraphPipelineCreateInfoAMDX;
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
    static npLibraryInfo(paramarg0: number): VkPipelineLibraryCreateInfoKHR;
    static npLibraryInfo(paramarg0: number, paramarg1: VkPipelineLibraryCreateInfoKHR): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStages(paramarg0: number): (Object | null)[];
    static npStages(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstageCount(paramarg0: number): number;
    static nstageCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    basePipelineHandle(): number;
    basePipelineHandle(arg0: number): VkExecutionGraphPipelineCreateInfoAMDX;
    basePipelineIndex(): number;
    basePipelineIndex(arg0: number): VkExecutionGraphPipelineCreateInfoAMDX;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkExecutionGraphPipelineCreateInfoAMDX;
    flags(): number;
    flags(arg0: number): VkExecutionGraphPipelineCreateInfoAMDX;
    layout(): number;
    layout(arg0: number): VkExecutionGraphPipelineCreateInfoAMDX;
    pLibraryInfo(): VkPipelineLibraryCreateInfoKHR;
    pLibraryInfo(arg0: VkPipelineLibraryCreateInfoKHR): VkExecutionGraphPipelineCreateInfoAMDX;
    pNext(): number;
    pNext(arg0: number): VkExecutionGraphPipelineCreateInfoAMDX;
    pNext(arg0: VkPipelineCompilerControlCreateInfoAMD): VkExecutionGraphPipelineCreateInfoAMDX;
    pNext(arg0: VkPipelineCreationFeedbackCreateInfo): VkExecutionGraphPipelineCreateInfoAMDX;
    pNext(arg0: VkPipelineCreationFeedbackCreateInfoEXT): VkExecutionGraphPipelineCreateInfoAMDX;
    pStages(): (Object | null)[];
    pStages(arg0: (Object | null)[]): VkExecutionGraphPipelineCreateInfoAMDX;
    sType(): number;
    sType(arg0: number): VkExecutionGraphPipelineCreateInfoAMDX;
    sType$Default(): VkExecutionGraphPipelineCreateInfoAMDX;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (Object | null)[], arg5: VkPipelineLibraryCreateInfoKHR, arg6: number, arg7: number, arg8: number): VkExecutionGraphPipelineCreateInfoAMDX;
    set(arg0: VkExecutionGraphPipelineCreateInfoAMDX): VkExecutionGraphPipelineCreateInfoAMDX;
    sizeof(): number;
    stageCount(): number;
    stageCount(arg0: number): VkExecutionGraphPipelineCreateInfoAMDX;
}