import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDeviceQueueInfo2 extends Struct<VkDeviceQueueInfo2> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QUEUEFAMILYINDEX: number;
    static QUEUEINDEX: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceQueueInfo2;
    static calloc(paramarg0: MemoryStack): VkDeviceQueueInfo2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceQueueInfo2;
    static create(paramarg0: number): VkDeviceQueueInfo2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceQueueInfo2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceQueueInfo2;
    static malloc(paramarg0: MemoryStack): VkDeviceQueueInfo2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nqueueFamilyIndex(paramarg0: number): number;
    static nqueueFamilyIndex(paramarg0: number, paramarg1: number): void;
    static nqueueIndex(paramarg0: number): number;
    static nqueueIndex(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceQueueInfo2;
    flags(): number;
    flags(arg0: number): VkDeviceQueueInfo2;
    pNext(): number;
    pNext(arg0: number): VkDeviceQueueInfo2;
    queueFamilyIndex(): number;
    queueFamilyIndex(arg0: number): VkDeviceQueueInfo2;
    queueIndex(): number;
    queueIndex(arg0: number): VkDeviceQueueInfo2;
    sType(): number;
    sType(arg0: number): VkDeviceQueueInfo2;
    sType$Default(): VkDeviceQueueInfo2;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkDeviceQueueInfo2;
    set(arg0: VkDeviceQueueInfo2): VkDeviceQueueInfo2;
    sizeof(): number;
}