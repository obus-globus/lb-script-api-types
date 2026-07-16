import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCopyImageInfo2 extends Struct<VkCopyImageInfo2> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTIMAGE: number;
    static DSTIMAGELAYOUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREGIONS: number;
    static REGIONCOUNT: number;
    static SIZEOF: number;
    static SRCIMAGE: number;
    static SRCIMAGELAYOUT: number;
    static STYPE: number;
    static calloc(): VkCopyImageInfo2;
    static calloc(paramarg0: MemoryStack): VkCopyImageInfo2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCopyImageInfo2;
    static create(paramarg0: number): VkCopyImageInfo2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCopyImageInfo2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCopyImageInfo2;
    static malloc(paramarg0: MemoryStack): VkCopyImageInfo2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstImage(paramarg0: number): number;
    static ndstImage(paramarg0: number, paramarg1: number): void;
    static ndstImageLayout(paramarg0: number): number;
    static ndstImageLayout(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npRegions(paramarg0: number): (Object | null)[];
    static npRegions(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nregionCount(paramarg0: number): number;
    static nregionCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcImage(paramarg0: number): number;
    static nsrcImage(paramarg0: number, paramarg1: number): void;
    static nsrcImageLayout(paramarg0: number): number;
    static nsrcImageLayout(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCopyImageInfo2;
    dstImage(): number;
    dstImage(arg0: number): VkCopyImageInfo2;
    dstImageLayout(): number;
    dstImageLayout(arg0: number): VkCopyImageInfo2;
    pNext(): number;
    pNext(arg0: number): VkCopyImageInfo2;
    pRegions(): (Object | null)[];
    pRegions(arg0: (Object | null)[]): VkCopyImageInfo2;
    regionCount(): number;
    sType(): number;
    sType(arg0: number): VkCopyImageInfo2;
    sType$Default(): VkCopyImageInfo2;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: (Object | null)[]): VkCopyImageInfo2;
    set(arg0: VkCopyImageInfo2): VkCopyImageInfo2;
    sizeof(): number;
    srcImage(): number;
    srcImage(arg0: number): VkCopyImageInfo2;
    srcImageLayout(): number;
    srcImageLayout(arg0: number): VkCopyImageInfo2;
}