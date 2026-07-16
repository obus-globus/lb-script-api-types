import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkAcquireNextImageInfoKHR extends Struct<VkAcquireNextImageInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEVICEMASK: number;
    static FENCE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SEMAPHORE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SWAPCHAIN: number;
    static TIMEOUT: number;
    static calloc(): VkAcquireNextImageInfoKHR;
    static calloc(paramarg0: MemoryStack): VkAcquireNextImageInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAcquireNextImageInfoKHR;
    static create(paramarg0: number): VkAcquireNextImageInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAcquireNextImageInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAcquireNextImageInfoKHR;
    static malloc(paramarg0: MemoryStack): VkAcquireNextImageInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndeviceMask(paramarg0: number): number;
    static ndeviceMask(paramarg0: number, paramarg1: number): void;
    static nfence(paramarg0: number): number;
    static nfence(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsemaphore(paramarg0: number): number;
    static nsemaphore(paramarg0: number, paramarg1: number): void;
    static nswapchain(paramarg0: number): number;
    static nswapchain(paramarg0: number, paramarg1: number): void;
    static ntimeout(paramarg0: number): number;
    static ntimeout(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAcquireNextImageInfoKHR;
    deviceMask(): number;
    deviceMask(arg0: number): VkAcquireNextImageInfoKHR;
    fence(): number;
    fence(arg0: number): VkAcquireNextImageInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkAcquireNextImageInfoKHR;
    sType(): number;
    sType(arg0: number): VkAcquireNextImageInfoKHR;
    sType$Default(): VkAcquireNextImageInfoKHR;
    semaphore(): number;
    semaphore(arg0: number): VkAcquireNextImageInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): VkAcquireNextImageInfoKHR;
    set(arg0: VkAcquireNextImageInfoKHR): VkAcquireNextImageInfoKHR;
    sizeof(): number;
    swapchain(): number;
    swapchain(arg0: number): VkAcquireNextImageInfoKHR;
    timeout(): number;
    timeout(arg0: number): VkAcquireNextImageInfoKHR;
}