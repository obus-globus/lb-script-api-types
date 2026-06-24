import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceGroupBindSparseInfo } from '../../../org/lwjgl/vulkan/VkDeviceGroupBindSparseInfo.d.ts'
import type { VkDeviceGroupBindSparseInfoKHR } from '../../../org/lwjgl/vulkan/VkDeviceGroupBindSparseInfoKHR.d.ts'
import type { VkFrameBoundaryEXT } from '../../../org/lwjgl/vulkan/VkFrameBoundaryEXT.d.ts'
import type { VkFrameBoundaryTensorsARM } from '../../../org/lwjgl/vulkan/VkFrameBoundaryTensorsARM.d.ts'
import type { VkTimelineSemaphoreSubmitInfo } from '../../../org/lwjgl/vulkan/VkTimelineSemaphoreSubmitInfo.d.ts'
import type { VkTimelineSemaphoreSubmitInfoKHR } from '../../../org/lwjgl/vulkan/VkTimelineSemaphoreSubmitInfoKHR.d.ts'
export class VkBindSparseInfo extends Struct<VkBindSparseInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFERBINDCOUNT: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IMAGEBINDCOUNT: number;
    static IMAGEOPAQUEBINDCOUNT: number;
    static PBUFFERBINDS: number;
    static PIMAGEBINDS: number;
    static PIMAGEOPAQUEBINDS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSIGNALSEMAPHORES: number;
    static PWAITSEMAPHORES: number;
    static SIGNALSEMAPHORECOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static WAITSEMAPHORECOUNT: number;
    static calloc(): VkBindSparseInfo;
    static calloc(paramarg0: MemoryStack): VkBindSparseInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBindSparseInfo;
    static create(paramarg0: number): VkBindSparseInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBindSparseInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBindSparseInfo;
    static malloc(paramarg0: MemoryStack): VkBindSparseInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbufferBindCount(paramarg0: number): number;
    static nbufferBindCount(paramarg0: number, paramarg1: number): void;
    static nimageBindCount(paramarg0: number): number;
    static nimageBindCount(paramarg0: number, paramarg1: number): void;
    static nimageOpaqueBindCount(paramarg0: number): number;
    static nimageOpaqueBindCount(paramarg0: number, paramarg1: number): void;
    static npBufferBinds(paramarg0: number): (Object | null)[];
    static npBufferBinds(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npImageBinds(paramarg0: number): (Object | null)[];
    static npImageBinds(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npImageOpaqueBinds(paramarg0: number): (Object | null)[];
    static npImageOpaqueBinds(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSignalSemaphores(paramarg0: number): LongBuffer;
    static npSignalSemaphores(paramarg0: number, paramarg1: LongBuffer): void;
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
    bufferBindCount(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBindSparseInfo;
    imageBindCount(): number;
    imageOpaqueBindCount(): number;
    pBufferBinds(): (Object | null)[];
    pBufferBinds(arg0: (Object | null)[]): VkBindSparseInfo;
    pImageBinds(): (Object | null)[];
    pImageBinds(arg0: (Object | null)[]): VkBindSparseInfo;
    pImageOpaqueBinds(): (Object | null)[];
    pImageOpaqueBinds(arg0: (Object | null)[]): VkBindSparseInfo;
    pNext(): number;
    pNext(arg0: number): VkBindSparseInfo;
    pNext(arg0: VkDeviceGroupBindSparseInfo): VkBindSparseInfo;
    pNext(arg0: VkDeviceGroupBindSparseInfoKHR): VkBindSparseInfo;
    pNext(arg0: VkFrameBoundaryEXT): VkBindSparseInfo;
    pNext(arg0: VkFrameBoundaryTensorsARM): VkBindSparseInfo;
    pNext(arg0: VkTimelineSemaphoreSubmitInfo): VkBindSparseInfo;
    pNext(arg0: VkTimelineSemaphoreSubmitInfoKHR): VkBindSparseInfo;
    pSignalSemaphores(): LongBuffer;
    pSignalSemaphores(arg0: LongBuffer): VkBindSparseInfo;
    pWaitSemaphores(): LongBuffer;
    pWaitSemaphores(arg0: LongBuffer): VkBindSparseInfo;
    sType(): number;
    sType(arg0: number): VkBindSparseInfo;
    sType$Default(): VkBindSparseInfo;
    set(arg0: number, arg1: number, arg2: LongBuffer, arg3: (Object | null)[], arg4: (Object | null)[], arg5: (Object | null)[], arg6: LongBuffer): VkBindSparseInfo;
    set(arg0: VkBindSparseInfo): VkBindSparseInfo;
    signalSemaphoreCount(): number;
    sizeof(): number;
    waitSemaphoreCount(): number;
}