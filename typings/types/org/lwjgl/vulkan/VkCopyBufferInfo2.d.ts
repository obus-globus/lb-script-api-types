import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCopyBufferInfo2 extends Struct<VkCopyBufferInfo2> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTBUFFER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREGIONS: number;
    static REGIONCOUNT: number;
    static SIZEOF: number;
    static SRCBUFFER: number;
    static STYPE: number;
    static calloc(): VkCopyBufferInfo2;
    static calloc(paramarg0: MemoryStack): VkCopyBufferInfo2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCopyBufferInfo2;
    static create(paramarg0: number): VkCopyBufferInfo2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyBufferInfo2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCopyBufferInfo2;
    static malloc(paramarg0: MemoryStack): VkCopyBufferInfo2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstBuffer(paramarg0: number): number;
    static ndstBuffer(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npRegions(paramarg0: number): (Object | null)[];
    static npRegions(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nregionCount(paramarg0: number): number;
    static nregionCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcBuffer(paramarg0: number): number;
    static nsrcBuffer(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCopyBufferInfo2;
    dstBuffer(): number;
    dstBuffer(arg0: number): VkCopyBufferInfo2;
    pNext(): number;
    pNext(arg0: number): VkCopyBufferInfo2;
    pRegions(): (Object | null)[];
    pRegions(arg0: (Object | null)[]): VkCopyBufferInfo2;
    regionCount(): number;
    sType(): number;
    sType(arg0: number): VkCopyBufferInfo2;
    sType$Default(): VkCopyBufferInfo2;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (Object | null)[]): VkCopyBufferInfo2;
    set(arg0: VkCopyBufferInfo2): VkCopyBufferInfo2;
    sizeof(): number;
    srcBuffer(): number;
    srcBuffer(arg0: number): VkCopyBufferInfo2;
}