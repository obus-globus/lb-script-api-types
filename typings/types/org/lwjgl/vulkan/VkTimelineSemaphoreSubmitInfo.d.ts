import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkTimelineSemaphoreSubmitInfo extends Struct<VkTimelineSemaphoreSubmitInfo> implements NativeResource {
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
    static SIGNALSEMAPHOREVALUECOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static WAITSEMAPHOREVALUECOUNT: number;
    static calloc(): VkTimelineSemaphoreSubmitInfo;
    static calloc(paramarg0: MemoryStack): VkTimelineSemaphoreSubmitInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkTimelineSemaphoreSubmitInfo;
    static create(paramarg0: number): VkTimelineSemaphoreSubmitInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkTimelineSemaphoreSubmitInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkTimelineSemaphoreSubmitInfo;
    static malloc(paramarg0: MemoryStack): VkTimelineSemaphoreSubmitInfo;
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
    static nsignalSemaphoreValueCount(paramarg0: number): number;
    static nsignalSemaphoreValueCount(paramarg0: number, paramarg1: number): void;
    static nwaitSemaphoreValueCount(paramarg0: number): number;
    static nwaitSemaphoreValueCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkTimelineSemaphoreSubmitInfo;
    pNext(): number;
    pNext(arg0: number): VkTimelineSemaphoreSubmitInfo;
    pSignalSemaphoreValues(): LongBuffer;
    pSignalSemaphoreValues(arg0: LongBuffer): VkTimelineSemaphoreSubmitInfo;
    pWaitSemaphoreValues(): LongBuffer;
    pWaitSemaphoreValues(arg0: LongBuffer): VkTimelineSemaphoreSubmitInfo;
    sType(): number;
    sType(arg0: number): VkTimelineSemaphoreSubmitInfo;
    sType$Default(): VkTimelineSemaphoreSubmitInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer, arg4: number, arg5: LongBuffer): VkTimelineSemaphoreSubmitInfo;
    set(arg0: VkTimelineSemaphoreSubmitInfo): VkTimelineSemaphoreSubmitInfo;
    signalSemaphoreValueCount(): number;
    signalSemaphoreValueCount(arg0: number): VkTimelineSemaphoreSubmitInfo;
    sizeof(): number;
    waitSemaphoreValueCount(): number;
    waitSemaphoreValueCount(arg0: number): VkTimelineSemaphoreSubmitInfo;
}