import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkD3D12FenceSubmitInfoKHR extends Struct<VkD3D12FenceSubmitInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSIGNALSEMAPHOREVALUES: number;
    static PWAITSEMAPHOREVALUES: number;
    static SIGNALSEMAPHOREVALUESCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static WAITSEMAPHOREVALUESCOUNT: number;
    static calloc(): VkD3D12FenceSubmitInfoKHR;
    static calloc(paramarg0: MemoryStack): VkD3D12FenceSubmitInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkD3D12FenceSubmitInfoKHR;
    static create(paramarg0: number): VkD3D12FenceSubmitInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkD3D12FenceSubmitInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkD3D12FenceSubmitInfoKHR;
    static malloc(paramarg0: MemoryStack): VkD3D12FenceSubmitInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSignalSemaphoreValues(paramarg0: number): LongBuffer;
    static npSignalSemaphoreValues(paramarg0: number, paramarg1: LongBuffer): void;
    static npWaitSemaphoreValues(paramarg0: number): LongBuffer;
    static npWaitSemaphoreValues(paramarg0: number, paramarg1: LongBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsignalSemaphoreValuesCount(paramarg0: number): number;
    static nsignalSemaphoreValuesCount(paramarg0: number, paramarg1: number): void;
    static nwaitSemaphoreValuesCount(paramarg0: number): number;
    static nwaitSemaphoreValuesCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkD3D12FenceSubmitInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkD3D12FenceSubmitInfoKHR;
    pSignalSemaphoreValues(): LongBuffer;
    pSignalSemaphoreValues(arg0: LongBuffer): VkD3D12FenceSubmitInfoKHR;
    pWaitSemaphoreValues(): LongBuffer;
    pWaitSemaphoreValues(arg0: LongBuffer): VkD3D12FenceSubmitInfoKHR;
    sType(): number;
    sType(arg0: number): VkD3D12FenceSubmitInfoKHR;
    sType$Default(): VkD3D12FenceSubmitInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer, arg4: number, arg5: LongBuffer): VkD3D12FenceSubmitInfoKHR;
    set(arg0: VkD3D12FenceSubmitInfoKHR): VkD3D12FenceSubmitInfoKHR;
    signalSemaphoreValuesCount(): number;
    signalSemaphoreValuesCount(arg0: number): VkD3D12FenceSubmitInfoKHR;
    sizeof(): number;
    waitSemaphoreValuesCount(): number;
    waitSemaphoreValuesCount(arg0: number): VkD3D12FenceSubmitInfoKHR;
}