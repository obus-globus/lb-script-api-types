import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSemaphoreWaitInfo extends Struct<VkSemaphoreWaitInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSEMAPHORES: number;
    static PVALUES: number;
    static SEMAPHORECOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSemaphoreWaitInfo;
    static calloc(paramarg0: MemoryStack): VkSemaphoreWaitInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSemaphoreWaitInfo;
    static create(paramarg0: number): VkSemaphoreWaitInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSemaphoreWaitInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSemaphoreWaitInfo;
    static malloc(paramarg0: MemoryStack): VkSemaphoreWaitInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSemaphores(paramarg0: number): LongBuffer;
    static npSemaphores(paramarg0: number, paramarg1: LongBuffer): void;
    static npValues(paramarg0: number): LongBuffer;
    static npValues(paramarg0: number, paramarg1: LongBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsemaphoreCount(paramarg0: number): number;
    static nsemaphoreCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSemaphoreWaitInfo;
    flags(): number;
    flags(arg0: number): VkSemaphoreWaitInfo;
    pNext(): number;
    pNext(arg0: number): VkSemaphoreWaitInfo;
    pSemaphores(): LongBuffer;
    pSemaphores(arg0: LongBuffer): VkSemaphoreWaitInfo;
    pValues(): LongBuffer;
    pValues(arg0: LongBuffer): VkSemaphoreWaitInfo;
    sType(): number;
    sType(arg0: number): VkSemaphoreWaitInfo;
    sType$Default(): VkSemaphoreWaitInfo;
    semaphoreCount(): number;
    semaphoreCount(arg0: number): VkSemaphoreWaitInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: LongBuffer, arg5: LongBuffer): VkSemaphoreWaitInfo;
    set(arg0: VkSemaphoreWaitInfo): VkSemaphoreWaitInfo;
    sizeof(): number;
}