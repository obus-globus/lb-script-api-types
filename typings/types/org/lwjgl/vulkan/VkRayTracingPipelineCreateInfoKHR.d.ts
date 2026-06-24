import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineBinaryInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineBinaryInfoKHR.d.ts'
import type { VkPipelineCreateFlags2CreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineCreateFlags2CreateInfo.d.ts'
import type { VkPipelineCreateFlags2CreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineCreateFlags2CreateInfoKHR.d.ts'
import type { VkPipelineCreationFeedbackCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedbackCreateInfo.d.ts'
import type { VkPipelineCreationFeedbackCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedbackCreateInfoEXT.d.ts'
import type { VkPipelineDynamicStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineDynamicStateCreateInfo.d.ts'
import type { VkPipelineLibraryCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineLibraryCreateInfoKHR.d.ts'
import type { VkPipelineRobustnessCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineRobustnessCreateInfo.d.ts'
import type { VkPipelineRobustnessCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineRobustnessCreateInfoEXT.d.ts'
import type { VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV } from '../../../org/lwjgl/vulkan/VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV.d.ts'
import type { VkRayTracingPipelineInterfaceCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkRayTracingPipelineInterfaceCreateInfoKHR.d.ts'
export class VkRayTracingPipelineCreateInfoKHR extends Struct<VkRayTracingPipelineCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BASEPIPELINEHANDLE: number;
    static BASEPIPELINEINDEX: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static GROUPCOUNT: number;
    static LAYOUT: number;
    static MAXPIPELINERAYRECURSIONDEPTH: number;
    static PDYNAMICSTATE: number;
    static PGROUPS: number;
    static PLIBRARYINFO: number;
    static PLIBRARYINTERFACE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTAGES: number;
    static SIZEOF: number;
    static STAGECOUNT: number;
    static STYPE: number;
    static calloc(): VkRayTracingPipelineCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkRayTracingPipelineCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRayTracingPipelineCreateInfoKHR;
    static create(paramarg0: number): VkRayTracingPipelineCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRayTracingPipelineCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRayTracingPipelineCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkRayTracingPipelineCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbasePipelineHandle(paramarg0: number): number;
    static nbasePipelineHandle(paramarg0: number, paramarg1: number): void;
    static nbasePipelineIndex(paramarg0: number): number;
    static nbasePipelineIndex(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static ngroupCount(paramarg0: number): number;
    static ngroupCount(paramarg0: number, paramarg1: number): void;
    static nlayout(paramarg0: number): number;
    static nlayout(paramarg0: number, paramarg1: number): void;
    static nmaxPipelineRayRecursionDepth(paramarg0: number): number;
    static nmaxPipelineRayRecursionDepth(paramarg0: number, paramarg1: number): void;
    static npDynamicState(paramarg0: number): VkPipelineDynamicStateCreateInfo;
    static npDynamicState(paramarg0: number, paramarg1: VkPipelineDynamicStateCreateInfo): void;
    static npGroups(paramarg0: number): (Object | null)[];
    static npGroups(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npLibraryInfo(paramarg0: number): VkPipelineLibraryCreateInfoKHR;
    static npLibraryInfo(paramarg0: number, paramarg1: VkPipelineLibraryCreateInfoKHR): void;
    static npLibraryInterface(paramarg0: number): VkRayTracingPipelineInterfaceCreateInfoKHR;
    static npLibraryInterface(paramarg0: number, paramarg1: VkRayTracingPipelineInterfaceCreateInfoKHR): void;
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
    basePipelineHandle(arg0: number): VkRayTracingPipelineCreateInfoKHR;
    basePipelineIndex(): number;
    basePipelineIndex(arg0: number): VkRayTracingPipelineCreateInfoKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRayTracingPipelineCreateInfoKHR;
    flags(): number;
    flags(arg0: number): VkRayTracingPipelineCreateInfoKHR;
    groupCount(): number;
    layout(): number;
    layout(arg0: number): VkRayTracingPipelineCreateInfoKHR;
    maxPipelineRayRecursionDepth(): number;
    maxPipelineRayRecursionDepth(arg0: number): VkRayTracingPipelineCreateInfoKHR;
    pDynamicState(): VkPipelineDynamicStateCreateInfo;
    pDynamicState(arg0: VkPipelineDynamicStateCreateInfo): VkRayTracingPipelineCreateInfoKHR;
    pGroups(): (Object | null)[];
    pGroups(arg0: (Object | null)[]): VkRayTracingPipelineCreateInfoKHR;
    pLibraryInfo(): VkPipelineLibraryCreateInfoKHR;
    pLibraryInfo(arg0: VkPipelineLibraryCreateInfoKHR): VkRayTracingPipelineCreateInfoKHR;
    pLibraryInterface(): VkRayTracingPipelineInterfaceCreateInfoKHR;
    pLibraryInterface(arg0: VkRayTracingPipelineInterfaceCreateInfoKHR): VkRayTracingPipelineCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkRayTracingPipelineCreateInfoKHR;
    pNext(arg0: VkPipelineBinaryInfoKHR): VkRayTracingPipelineCreateInfoKHR;
    pNext(arg0: VkPipelineCreateFlags2CreateInfo): VkRayTracingPipelineCreateInfoKHR;
    pNext(arg0: VkPipelineCreateFlags2CreateInfoKHR): VkRayTracingPipelineCreateInfoKHR;
    pNext(arg0: VkPipelineCreationFeedbackCreateInfo): VkRayTracingPipelineCreateInfoKHR;
    pNext(arg0: VkPipelineCreationFeedbackCreateInfoEXT): VkRayTracingPipelineCreateInfoKHR;
    pNext(arg0: VkPipelineRobustnessCreateInfo): VkRayTracingPipelineCreateInfoKHR;
    pNext(arg0: VkPipelineRobustnessCreateInfoEXT): VkRayTracingPipelineCreateInfoKHR;
    pNext(arg0: VkRayTracingPipelineClusterAccelerationStructureCreateInfoNV): VkRayTracingPipelineCreateInfoKHR;
    pStages(): (Object | null)[];
    pStages(arg0: (Object | null)[]): VkRayTracingPipelineCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkRayTracingPipelineCreateInfoKHR;
    sType$Default(): VkRayTracingPipelineCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[], arg4: (Object | null)[], arg5: number, arg6: VkPipelineLibraryCreateInfoKHR, arg7: VkRayTracingPipelineInterfaceCreateInfoKHR, arg8: VkPipelineDynamicStateCreateInfo, arg9: number, arg10: number, arg11: number): VkRayTracingPipelineCreateInfoKHR;
    set(arg0: VkRayTracingPipelineCreateInfoKHR): VkRayTracingPipelineCreateInfoKHR;
    sizeof(): number;
    stageCount(): number;
}