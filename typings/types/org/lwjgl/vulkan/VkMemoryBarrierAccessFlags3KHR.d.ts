import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkMemoryBarrierAccessFlags3KHR extends Struct<VkMemoryBarrierAccessFlags3KHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTACCESSMASK3: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCACCESSMASK3: number;
    static STYPE: number;
    static calloc(): VkMemoryBarrierAccessFlags3KHR;
    static calloc(paramarg0: MemoryStack): VkMemoryBarrierAccessFlags3KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMemoryBarrierAccessFlags3KHR;
    static create(paramarg0: number): VkMemoryBarrierAccessFlags3KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryBarrierAccessFlags3KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMemoryBarrierAccessFlags3KHR;
    static malloc(paramarg0: MemoryStack): VkMemoryBarrierAccessFlags3KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstAccessMask3(paramarg0: number): number;
    static ndstAccessMask3(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcAccessMask3(paramarg0: number): number;
    static nsrcAccessMask3(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkMemoryBarrierAccessFlags3KHR;
    dstAccessMask3(): number;
    dstAccessMask3(arg0: number): VkMemoryBarrierAccessFlags3KHR;
    pNext(): number;
    pNext(arg0: number): VkMemoryBarrierAccessFlags3KHR;
    sType(): number;
    sType(arg0: number): VkMemoryBarrierAccessFlags3KHR;
    sType$Default(): VkMemoryBarrierAccessFlags3KHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number): VkMemoryBarrierAccessFlags3KHR;
    set(arg0: VkMemoryBarrierAccessFlags3KHR): VkMemoryBarrierAccessFlags3KHR;
    sizeof(): number;
    srcAccessMask3(): number;
    srcAccessMask3(arg0: number): VkMemoryBarrierAccessFlags3KHR;
}