import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkFrameBoundaryEXT extends Struct<VkFrameBoundaryEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFERCOUNT: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static FRAMEID: number;
    static IMAGECOUNT: number;
    static PBUFFERS: number;
    static PIMAGES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PTAG: number;
    static SIZEOF: number;
    static STYPE: number;
    static TAGNAME: number;
    static TAGSIZE: number;
    static calloc(): VkFrameBoundaryEXT;
    static calloc(paramarg0: MemoryStack): VkFrameBoundaryEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkFrameBoundaryEXT;
    static create(paramarg0: number): VkFrameBoundaryEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkFrameBoundaryEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkFrameBoundaryEXT;
    static malloc(paramarg0: MemoryStack): VkFrameBoundaryEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbufferCount(paramarg0: number): number;
    static nbufferCount(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nframeID(paramarg0: number): number;
    static nframeID(paramarg0: number, paramarg1: number): void;
    static nimageCount(paramarg0: number): number;
    static nimageCount(paramarg0: number, paramarg1: number): void;
    static npBuffers(paramarg0: number): LongBuffer;
    static npBuffers(paramarg0: number, paramarg1: LongBuffer): void;
    static npImages(paramarg0: number): LongBuffer;
    static npImages(paramarg0: number, paramarg1: LongBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npTag(paramarg0: number): ByteBuffer;
    static npTag(paramarg0: number, paramarg1: ByteBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntagName(paramarg0: number): number;
    static ntagName(paramarg0: number, paramarg1: number): void;
    static ntagSize(paramarg0: number): number;
    static ntagSize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    bufferCount(): number;
    bufferCount(arg0: number): VkFrameBoundaryEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkFrameBoundaryEXT;
    flags(): number;
    flags(arg0: number): VkFrameBoundaryEXT;
    frameID(): number;
    frameID(arg0: number): VkFrameBoundaryEXT;
    imageCount(): number;
    imageCount(arg0: number): VkFrameBoundaryEXT;
    pBuffers(): LongBuffer;
    pBuffers(arg0: LongBuffer): VkFrameBoundaryEXT;
    pImages(): LongBuffer;
    pImages(arg0: LongBuffer): VkFrameBoundaryEXT;
    pNext(): number;
    pNext(arg0: number): VkFrameBoundaryEXT;
    pTag(): ByteBuffer;
    pTag(arg0: ByteBuffer): VkFrameBoundaryEXT;
    sType(): number;
    sType(arg0: number): VkFrameBoundaryEXT;
    sType$Default(): VkFrameBoundaryEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: LongBuffer, arg6: number, arg7: LongBuffer, arg8: number, arg9: number, arg10: ByteBuffer): VkFrameBoundaryEXT;
    set(arg0: VkFrameBoundaryEXT): VkFrameBoundaryEXT;
    sizeof(): number;
    tagName(): number;
    tagName(arg0: number): VkFrameBoundaryEXT;
    tagSize(): number;
    tagSize(arg0: number): VkFrameBoundaryEXT;
}