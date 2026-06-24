import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSemaphoreSubmitInfo extends Struct<VkSemaphoreSubmitInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEINDEX: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEMAPHORE: number;
    static SIZEOF: number;
    static STAGEMASK: number;
    static STYPE: number;
    static VALUE: number;
    static calloc(): VkSemaphoreSubmitInfo;
    static calloc(paramarg0: MemoryStack): VkSemaphoreSubmitInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSemaphoreSubmitInfo;
    static create(paramarg0: number): VkSemaphoreSubmitInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSemaphoreSubmitInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSemaphoreSubmitInfo;
    static malloc(paramarg0: MemoryStack): VkSemaphoreSubmitInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndeviceIndex(paramarg0: number): number;
    static ndeviceIndex(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsemaphore(paramarg0: number): number;
    static nsemaphore(paramarg0: number, paramarg1: number): void;
    static nstageMask(paramarg0: number): number;
    static nstageMask(paramarg0: number, paramarg1: number): void;
    static nvalue(paramarg0: number): number;
    static nvalue(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSemaphoreSubmitInfo;
    deviceIndex(): number;
    deviceIndex(arg0: number): VkSemaphoreSubmitInfo;
    pNext(): number;
    pNext(arg0: number): VkSemaphoreSubmitInfo;
    sType(): number;
    sType(arg0: number): VkSemaphoreSubmitInfo;
    sType$Default(): VkSemaphoreSubmitInfo;
    semaphore(): number;
    semaphore(arg0: number): VkSemaphoreSubmitInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkSemaphoreSubmitInfo;
    set(arg0: VkSemaphoreSubmitInfo): VkSemaphoreSubmitInfo;
    sizeof(): number;
    stageMask(): number;
    stageMask(arg0: number): VkSemaphoreSubmitInfo;
    value(): number;
    value(arg0: number): VkSemaphoreSubmitInfo;
}