import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExternalMemoryAcquireUnmodifiedEXT } from '../../../org/lwjgl/vulkan/VkExternalMemoryAcquireUnmodifiedEXT.d.ts'
export class VkBufferMemoryBarrier extends Struct<VkBufferMemoryBarrier> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTACCESSMASK: number;
    static DSTQUEUEFAMILYINDEX: number;
    static OFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static SRCACCESSMASK: number;
    static SRCQUEUEFAMILYINDEX: number;
    static STYPE: number;
    static calloc(): VkBufferMemoryBarrier;
    static calloc(paramarg0: MemoryStack): VkBufferMemoryBarrier;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBufferMemoryBarrier;
    static create(paramarg0: number): VkBufferMemoryBarrier;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBufferMemoryBarrier;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBufferMemoryBarrier;
    static malloc(paramarg0: MemoryStack): VkBufferMemoryBarrier;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbuffer(paramarg0: number): number;
    static nbuffer(paramarg0: number, paramarg1: number): void;
    static ndstAccessMask(paramarg0: number): number;
    static ndstAccessMask(paramarg0: number, paramarg1: number): void;
    static ndstQueueFamilyIndex(paramarg0: number): number;
    static ndstQueueFamilyIndex(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static nsrcAccessMask(paramarg0: number): number;
    static nsrcAccessMask(paramarg0: number, paramarg1: number): void;
    static nsrcQueueFamilyIndex(paramarg0: number): number;
    static nsrcQueueFamilyIndex(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    buffer(): number;
    buffer(arg0: number): VkBufferMemoryBarrier;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBufferMemoryBarrier;
    dstAccessMask(): number;
    dstAccessMask(arg0: number): VkBufferMemoryBarrier;
    dstQueueFamilyIndex(): number;
    dstQueueFamilyIndex(arg0: number): VkBufferMemoryBarrier;
    offset(): number;
    offset(arg0: number): VkBufferMemoryBarrier;
    pNext(): number;
    pNext(arg0: number): VkBufferMemoryBarrier;
    pNext(arg0: VkExternalMemoryAcquireUnmodifiedEXT): VkBufferMemoryBarrier;
    sType(): number;
    sType(arg0: number): VkBufferMemoryBarrier;
    sType$Default(): VkBufferMemoryBarrier;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): VkBufferMemoryBarrier;
    set(arg0: VkBufferMemoryBarrier): VkBufferMemoryBarrier;
    size(): number;
    size(arg0: number): VkBufferMemoryBarrier;
    sizeof(): number;
    srcAccessMask(): number;
    srcAccessMask(arg0: number): VkBufferMemoryBarrier;
    srcQueueFamilyIndex(): number;
    srcQueueFamilyIndex(arg0: number): VkBufferMemoryBarrier;
}