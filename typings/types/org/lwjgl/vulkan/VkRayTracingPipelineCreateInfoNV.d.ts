import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineCreateFlags2CreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineCreateFlags2CreateInfo.d.ts'
import type { VkPipelineCreateFlags2CreateInfoKHR } from '../../../org/lwjgl/vulkan/VkPipelineCreateFlags2CreateInfoKHR.d.ts'
import type { VkPipelineCreationFeedbackCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedbackCreateInfo.d.ts'
import type { VkPipelineCreationFeedbackCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineCreationFeedbackCreateInfoEXT.d.ts'
export class VkRayTracingPipelineCreateInfoNV extends Struct<VkRayTracingPipelineCreateInfoNV> implements NativeResource {
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
    static MAXRECURSIONDEPTH: number;
    static PGROUPS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTAGES: number;
    static SIZEOF: number;
    static STAGECOUNT: number;
    static STYPE: number;
    static calloc(): VkRayTracingPipelineCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkRayTracingPipelineCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRayTracingPipelineCreateInfoNV;
    static create(paramarg0: number): VkRayTracingPipelineCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRayTracingPipelineCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRayTracingPipelineCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkRayTracingPipelineCreateInfoNV;
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
    static nmaxRecursionDepth(paramarg0: number): number;
    static nmaxRecursionDepth(paramarg0: number, paramarg1: number): void;
    static npGroups(paramarg0: number): (Object | null)[];
    static npGroups(paramarg0: number, paramarg1: (Object | null)[]): void;
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
    basePipelineHandle(arg0: number): VkRayTracingPipelineCreateInfoNV;
    basePipelineIndex(): number;
    basePipelineIndex(arg0: number): VkRayTracingPipelineCreateInfoNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRayTracingPipelineCreateInfoNV;
    flags(): number;
    flags(arg0: number): VkRayTracingPipelineCreateInfoNV;
    groupCount(): number;
    layout(): number;
    layout(arg0: number): VkRayTracingPipelineCreateInfoNV;
    maxRecursionDepth(): number;
    maxRecursionDepth(arg0: number): VkRayTracingPipelineCreateInfoNV;
    pGroups(): (Object | null)[];
    pGroups(arg0: (Object | null)[]): VkRayTracingPipelineCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkRayTracingPipelineCreateInfoNV;
    pNext(arg0: VkPipelineCreateFlags2CreateInfo): VkRayTracingPipelineCreateInfoNV;
    pNext(arg0: VkPipelineCreateFlags2CreateInfoKHR): VkRayTracingPipelineCreateInfoNV;
    pNext(arg0: VkPipelineCreationFeedbackCreateInfo): VkRayTracingPipelineCreateInfoNV;
    pNext(arg0: VkPipelineCreationFeedbackCreateInfoEXT): VkRayTracingPipelineCreateInfoNV;
    pStages(): (Object | null)[];
    pStages(arg0: (Object | null)[]): VkRayTracingPipelineCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkRayTracingPipelineCreateInfoNV;
    sType$Default(): VkRayTracingPipelineCreateInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[], arg4: (Object | null)[], arg5: number, arg6: number, arg7: number, arg8: number): VkRayTracingPipelineCreateInfoNV;
    set(arg0: VkRayTracingPipelineCreateInfoNV): VkRayTracingPipelineCreateInfoNV;
    sizeof(): number;
    stageCount(): number;
}