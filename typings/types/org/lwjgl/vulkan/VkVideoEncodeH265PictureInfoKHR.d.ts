import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeH265PictureInfo } from '../../../org/lwjgl/vulkan/video/StdVideoEncodeH265PictureInfo.d.ts'
export class VkVideoEncodeH265PictureInfoKHR extends Struct<VkVideoEncodeH265PictureInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static NALUSLICESEGMENTENTRYCOUNT: number;
    static PNALUSLICESEGMENTENTRIES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTDPICTUREINFO: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeH265PictureInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH265PictureInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH265PictureInfoKHR;
    static create(paramarg0: number): VkVideoEncodeH265PictureInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH265PictureInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH265PictureInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH265PictureInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nnaluSliceSegmentEntryCount(paramarg0: number): number;
    static nnaluSliceSegmentEntryCount(paramarg0: number, paramarg1: number): void;
    static npNaluSliceSegmentEntries(paramarg0: number): (Object | null)[];
    static npNaluSliceSegmentEntries(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStdPictureInfo(paramarg0: number): StdVideoEncodeH265PictureInfo;
    static npStdPictureInfo(paramarg0: number, paramarg1: StdVideoEncodeH265PictureInfo): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH265PictureInfoKHR;
    naluSliceSegmentEntryCount(): number;
    pNaluSliceSegmentEntries(): (Object | null)[];
    pNaluSliceSegmentEntries(arg0: (Object | null)[]): VkVideoEncodeH265PictureInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeH265PictureInfoKHR;
    pStdPictureInfo(): StdVideoEncodeH265PictureInfo;
    pStdPictureInfo(arg0: StdVideoEncodeH265PictureInfo): VkVideoEncodeH265PictureInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeH265PictureInfoKHR;
    sType$Default(): VkVideoEncodeH265PictureInfoKHR;
    set(arg0: number, arg1: number, arg2: (Object | null)[], arg3: StdVideoEncodeH265PictureInfo): VkVideoEncodeH265PictureInfoKHR;
    set(arg0: VkVideoEncodeH265PictureInfoKHR): VkVideoEncodeH265PictureInfoKHR;
    sizeof(): number;
}