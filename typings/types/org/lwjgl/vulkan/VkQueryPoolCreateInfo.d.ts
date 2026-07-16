import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkQueryPoolCreateInfoINTEL } from '../../../org/lwjgl/vulkan/VkQueryPoolCreateInfoINTEL.d.ts'
import type { VkQueryPoolPerformanceCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkQueryPoolPerformanceCreateInfoKHR.d.ts'
import type { VkQueryPoolPerformanceQueryCreateInfoINTEL } from '../../../org/lwjgl/vulkan/VkQueryPoolPerformanceQueryCreateInfoINTEL.d.ts'
import type { VkQueryPoolVideoEncodeFeedbackCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkQueryPoolVideoEncodeFeedbackCreateInfoKHR.d.ts'
import type { VkVideoDecodeAV1ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeAV1ProfileInfoKHR.d.ts'
import type { VkVideoDecodeH264ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH264ProfileInfoKHR.d.ts'
import type { VkVideoDecodeH265ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeH265ProfileInfoKHR.d.ts'
import type { VkVideoDecodeUsageInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeUsageInfoKHR.d.ts'
import type { VkVideoDecodeVP9ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoDecodeVP9ProfileInfoKHR.d.ts'
import type { VkVideoEncodeAV1ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeAV1ProfileInfoKHR.d.ts'
import type { VkVideoEncodeH264ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH264ProfileInfoKHR.d.ts'
import type { VkVideoEncodeH265ProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeH265ProfileInfoKHR.d.ts'
import type { VkVideoEncodeUsageInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoEncodeUsageInfoKHR.d.ts'
import type { VkVideoProfileInfoKHR } from '../../../org/lwjgl/vulkan/VkVideoProfileInfoKHR.d.ts'
export class VkQueryPoolCreateInfo extends Struct<VkQueryPoolCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PIPELINESTATISTICS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QUERYCOUNT: number;
    static QUERYTYPE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkQueryPoolCreateInfo;
    static calloc(paramarg0: MemoryStack): VkQueryPoolCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkQueryPoolCreateInfo;
    static create(paramarg0: number): VkQueryPoolCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkQueryPoolCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkQueryPoolCreateInfo;
    static malloc(paramarg0: MemoryStack): VkQueryPoolCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npipelineStatistics(paramarg0: number): number;
    static npipelineStatistics(paramarg0: number, paramarg1: number): void;
    static nqueryCount(paramarg0: number): number;
    static nqueryCount(paramarg0: number, paramarg1: number): void;
    static nqueryType(paramarg0: number): number;
    static nqueryType(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkQueryPoolCreateInfo;
    flags(): number;
    flags(arg0: number): VkQueryPoolCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkQueryPoolCreateInfo;
    pNext(arg0: VkQueryPoolCreateInfoINTEL): VkQueryPoolCreateInfo;
    pNext(arg0: VkQueryPoolPerformanceCreateInfoKHR): VkQueryPoolCreateInfo;
    pNext(arg0: VkQueryPoolPerformanceQueryCreateInfoINTEL): VkQueryPoolCreateInfo;
    pNext(arg0: VkQueryPoolVideoEncodeFeedbackCreateInfoKHR): VkQueryPoolCreateInfo;
    pNext(arg0: VkVideoDecodeAV1ProfileInfoKHR): VkQueryPoolCreateInfo;
    pNext(arg0: VkVideoDecodeH264ProfileInfoKHR): VkQueryPoolCreateInfo;
    pNext(arg0: VkVideoDecodeH265ProfileInfoKHR): VkQueryPoolCreateInfo;
    pNext(arg0: VkVideoDecodeUsageInfoKHR): VkQueryPoolCreateInfo;
    pNext(arg0: VkVideoDecodeVP9ProfileInfoKHR): VkQueryPoolCreateInfo;
    pNext(arg0: VkVideoEncodeAV1ProfileInfoKHR): VkQueryPoolCreateInfo;
    pNext(arg0: VkVideoEncodeH264ProfileInfoKHR): VkQueryPoolCreateInfo;
    pNext(arg0: VkVideoEncodeH265ProfileInfoKHR): VkQueryPoolCreateInfo;
    pNext(arg0: VkVideoEncodeUsageInfoKHR): VkQueryPoolCreateInfo;
    pNext(arg0: VkVideoProfileInfoKHR): VkQueryPoolCreateInfo;
    pipelineStatistics(): number;
    pipelineStatistics(arg0: number): VkQueryPoolCreateInfo;
    queryCount(): number;
    queryCount(arg0: number): VkQueryPoolCreateInfo;
    queryType(): number;
    queryType(arg0: number): VkQueryPoolCreateInfo;
    sType(): number;
    sType(arg0: number): VkQueryPoolCreateInfo;
    sType$Default(): VkQueryPoolCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkQueryPoolCreateInfo;
    set(arg0: VkQueryPoolCreateInfo): VkQueryPoolCreateInfo;
    sizeof(): number;
}