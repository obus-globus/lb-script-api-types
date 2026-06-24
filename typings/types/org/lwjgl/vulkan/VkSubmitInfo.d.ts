import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAmigoProfilingSubmitInfoSEC } from '../../../org/lwjgl/vulkan/VkAmigoProfilingSubmitInfoSEC.d.ts'
import type { VkD3D12FenceSubmitInfoKHR } from '../../../org/lwjgl/vulkan/VkD3D12FenceSubmitInfoKHR.d.ts'
import type { VkDeviceGroupSubmitInfo } from '../../../org/lwjgl/vulkan/VkDeviceGroupSubmitInfo.d.ts'
import type { VkDeviceGroupSubmitInfoKHR } from '../../../org/lwjgl/vulkan/VkDeviceGroupSubmitInfoKHR.d.ts'
import type { VkFrameBoundaryEXT } from '../../../org/lwjgl/vulkan/VkFrameBoundaryEXT.d.ts'
import type { VkFrameBoundaryTensorsARM } from '../../../org/lwjgl/vulkan/VkFrameBoundaryTensorsARM.d.ts'
import type { VkLatencySubmissionPresentIdNV } from '../../../org/lwjgl/vulkan/VkLatencySubmissionPresentIdNV.d.ts'
import type { VkPerformanceQuerySubmitInfoKHR } from '../../../org/lwjgl/vulkan/VkPerformanceQuerySubmitInfoKHR.d.ts'
import type { VkProtectedSubmitInfo } from '../../../org/lwjgl/vulkan/VkProtectedSubmitInfo.d.ts'
import type { VkTimelineSemaphoreSubmitInfo } from '../../../org/lwjgl/vulkan/VkTimelineSemaphoreSubmitInfo.d.ts'
import type { VkTimelineSemaphoreSubmitInfoKHR } from '../../../org/lwjgl/vulkan/VkTimelineSemaphoreSubmitInfoKHR.d.ts'
import type { VkWin32KeyedMutexAcquireReleaseInfoKHR } from '../../../org/lwjgl/vulkan/VkWin32KeyedMutexAcquireReleaseInfoKHR.d.ts'
import type { VkWin32KeyedMutexAcquireReleaseInfoNV } from '../../../org/lwjgl/vulkan/VkWin32KeyedMutexAcquireReleaseInfoNV.d.ts'
export class VkSubmitInfo extends Struct<VkSubmitInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMMANDBUFFERCOUNT: number;
    static PCOMMANDBUFFERS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSIGNALSEMAPHORES: number;
    static PWAITDSTSTAGEMASK: number;
    static PWAITSEMAPHORES: number;
    static SIGNALSEMAPHORECOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static WAITSEMAPHORECOUNT: number;
    static calloc(): VkSubmitInfo;
    static calloc(paramarg0: MemoryStack): VkSubmitInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSubmitInfo;
    static create(paramarg0: number): VkSubmitInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSubmitInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSubmitInfo;
    static malloc(paramarg0: MemoryStack): VkSubmitInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncommandBufferCount(paramarg0: number): number;
    static ncommandBufferCount(paramarg0: number, paramarg1: number): void;
    static npCommandBuffers(paramarg0: number): PointerBuffer;
    static npCommandBuffers(paramarg0: number, paramarg1: PointerBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSignalSemaphores(paramarg0: number): LongBuffer;
    static npSignalSemaphores(paramarg0: number, paramarg1: LongBuffer): void;
    static npWaitDstStageMask(paramarg0: number): IntBuffer;
    static npWaitDstStageMask(paramarg0: number, paramarg1: IntBuffer): void;
    static npWaitSemaphores(paramarg0: number): LongBuffer;
    static npWaitSemaphores(paramarg0: number, paramarg1: LongBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsignalSemaphoreCount(paramarg0: number): number;
    static nsignalSemaphoreCount(paramarg0: number, paramarg1: number): void;
    static nwaitSemaphoreCount(paramarg0: number): number;
    static nwaitSemaphoreCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    commandBufferCount(): number;
    create(arg0: number, arg1: ByteBuffer): VkSubmitInfo;
    pCommandBuffers(): PointerBuffer;
    pCommandBuffers(arg0: PointerBuffer): VkSubmitInfo;
    pNext(): number;
    pNext(arg0: number): VkSubmitInfo;
    pNext(arg0: VkAmigoProfilingSubmitInfoSEC): VkSubmitInfo;
    pNext(arg0: VkD3D12FenceSubmitInfoKHR): VkSubmitInfo;
    pNext(arg0: VkDeviceGroupSubmitInfo): VkSubmitInfo;
    pNext(arg0: VkDeviceGroupSubmitInfoKHR): VkSubmitInfo;
    pNext(arg0: VkFrameBoundaryEXT): VkSubmitInfo;
    pNext(arg0: VkFrameBoundaryTensorsARM): VkSubmitInfo;
    pNext(arg0: VkLatencySubmissionPresentIdNV): VkSubmitInfo;
    pNext(arg0: VkPerformanceQuerySubmitInfoKHR): VkSubmitInfo;
    pNext(arg0: VkProtectedSubmitInfo): VkSubmitInfo;
    pNext(arg0: VkTimelineSemaphoreSubmitInfo): VkSubmitInfo;
    pNext(arg0: VkTimelineSemaphoreSubmitInfoKHR): VkSubmitInfo;
    pNext(arg0: VkWin32KeyedMutexAcquireReleaseInfoKHR): VkSubmitInfo;
    pNext(arg0: VkWin32KeyedMutexAcquireReleaseInfoNV): VkSubmitInfo;
    pSignalSemaphores(): LongBuffer;
    pSignalSemaphores(arg0: LongBuffer): VkSubmitInfo;
    pWaitDstStageMask(): IntBuffer;
    pWaitDstStageMask(arg0: IntBuffer): VkSubmitInfo;
    pWaitSemaphores(): LongBuffer;
    pWaitSemaphores(arg0: LongBuffer): VkSubmitInfo;
    sType(): number;
    sType(arg0: number): VkSubmitInfo;
    sType$Default(): VkSubmitInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer, arg4: IntBuffer, arg5: PointerBuffer, arg6: LongBuffer): VkSubmitInfo;
    set(arg0: VkSubmitInfo): VkSubmitInfo;
    signalSemaphoreCount(): number;
    sizeof(): number;
    waitSemaphoreCount(): number;
    waitSemaphoreCount(arg0: number): VkSubmitInfo;
}