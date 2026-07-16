import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkFrameBoundaryEXT } from '../../../org/lwjgl/vulkan/VkFrameBoundaryEXT.d.ts'
import type { VkFrameBoundaryTensorsARM } from '../../../org/lwjgl/vulkan/VkFrameBoundaryTensorsARM.d.ts'
import type { VkLatencySubmissionPresentIdNV } from '../../../org/lwjgl/vulkan/VkLatencySubmissionPresentIdNV.d.ts'
import type { VkPerformanceQuerySubmitInfoKHR } from '../../../org/lwjgl/vulkan/VkPerformanceQuerySubmitInfoKHR.d.ts'
import type { VkWin32KeyedMutexAcquireReleaseInfoKHR } from '../../../org/lwjgl/vulkan/VkWin32KeyedMutexAcquireReleaseInfoKHR.d.ts'
import type { VkWin32KeyedMutexAcquireReleaseInfoNV } from '../../../org/lwjgl/vulkan/VkWin32KeyedMutexAcquireReleaseInfoNV.d.ts'
export class VkSubmitInfo2 extends Struct<VkSubmitInfo2> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMMANDBUFFERINFOCOUNT: number;
    static FLAGS: number;
    static PCOMMANDBUFFERINFOS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSIGNALSEMAPHOREINFOS: number;
    static PWAITSEMAPHOREINFOS: number;
    static SIGNALSEMAPHOREINFOCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static WAITSEMAPHOREINFOCOUNT: number;
    static calloc(): VkSubmitInfo2;
    static calloc(paramarg0: MemoryStack): VkSubmitInfo2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSubmitInfo2;
    static create(paramarg0: number): VkSubmitInfo2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubmitInfo2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSubmitInfo2;
    static malloc(paramarg0: MemoryStack): VkSubmitInfo2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncommandBufferInfoCount(paramarg0: number): number;
    static ncommandBufferInfoCount(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npCommandBufferInfos(paramarg0: number): (Object | null)[];
    static npCommandBufferInfos(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSignalSemaphoreInfos(paramarg0: number): (Object | null)[];
    static npSignalSemaphoreInfos(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npWaitSemaphoreInfos(paramarg0: number): (Object | null)[];
    static npWaitSemaphoreInfos(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsignalSemaphoreInfoCount(paramarg0: number): number;
    static nsignalSemaphoreInfoCount(paramarg0: number, paramarg1: number): void;
    static nwaitSemaphoreInfoCount(paramarg0: number): number;
    static nwaitSemaphoreInfoCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    commandBufferInfoCount(): number;
    create(arg0: number, arg1: ByteBuffer): VkSubmitInfo2;
    flags(): number;
    flags(arg0: number): VkSubmitInfo2;
    pCommandBufferInfos(): (Object | null)[];
    pCommandBufferInfos(arg0: (Object | null)[]): VkSubmitInfo2;
    pNext(): number;
    pNext(arg0: number): VkSubmitInfo2;
    pNext(arg0: VkFrameBoundaryEXT): VkSubmitInfo2;
    pNext(arg0: VkFrameBoundaryTensorsARM): VkSubmitInfo2;
    pNext(arg0: VkLatencySubmissionPresentIdNV): VkSubmitInfo2;
    pNext(arg0: VkPerformanceQuerySubmitInfoKHR): VkSubmitInfo2;
    pNext(arg0: VkWin32KeyedMutexAcquireReleaseInfoKHR): VkSubmitInfo2;
    pNext(arg0: VkWin32KeyedMutexAcquireReleaseInfoNV): VkSubmitInfo2;
    pSignalSemaphoreInfos(): (Object | null)[];
    pSignalSemaphoreInfos(arg0: (Object | null)[]): VkSubmitInfo2;
    pWaitSemaphoreInfos(): (Object | null)[];
    pWaitSemaphoreInfos(arg0: (Object | null)[]): VkSubmitInfo2;
    sType(): number;
    sType(arg0: number): VkSubmitInfo2;
    sType$Default(): VkSubmitInfo2;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[], arg4: (Object | null)[], arg5: (Object | null)[]): VkSubmitInfo2;
    set(arg0: VkSubmitInfo2): VkSubmitInfo2;
    signalSemaphoreInfoCount(): number;
    sizeof(): number;
    waitSemaphoreInfoCount(): number;
}