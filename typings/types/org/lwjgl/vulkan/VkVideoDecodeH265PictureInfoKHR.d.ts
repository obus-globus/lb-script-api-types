import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoDecodeH265PictureInfo } from '../../../org/lwjgl/vulkan/video/StdVideoDecodeH265PictureInfo.d.ts'
export class VkVideoDecodeH265PictureInfoKHR extends Struct<VkVideoDecodeH265PictureInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSLICESEGMENTOFFSETS: number;
    static PSTDPICTUREINFO: number;
    static SIZEOF: number;
    static SLICESEGMENTCOUNT: number;
    static STYPE: number;
    static calloc(): VkVideoDecodeH265PictureInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoDecodeH265PictureInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoDecodeH265PictureInfoKHR;
    static create(paramarg0: number): VkVideoDecodeH265PictureInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoDecodeH265PictureInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoDecodeH265PictureInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoDecodeH265PictureInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSliceSegmentOffsets(paramarg0: number): IntBuffer;
    static npSliceSegmentOffsets(paramarg0: number, paramarg1: IntBuffer): void;
    static npStdPictureInfo(paramarg0: number): StdVideoDecodeH265PictureInfo;
    static npStdPictureInfo(paramarg0: number, paramarg1: StdVideoDecodeH265PictureInfo): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsliceSegmentCount(paramarg0: number): number;
    static nsliceSegmentCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoDecodeH265PictureInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoDecodeH265PictureInfoKHR;
    pSliceSegmentOffsets(): IntBuffer;
    pSliceSegmentOffsets(arg0: IntBuffer): VkVideoDecodeH265PictureInfoKHR;
    pStdPictureInfo(): StdVideoDecodeH265PictureInfo;
    pStdPictureInfo(arg0: StdVideoDecodeH265PictureInfo): VkVideoDecodeH265PictureInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoDecodeH265PictureInfoKHR;
    sType$Default(): VkVideoDecodeH265PictureInfoKHR;
    set(arg0: number, arg1: number, arg2: StdVideoDecodeH265PictureInfo, arg3: IntBuffer): VkVideoDecodeH265PictureInfoKHR;
    set(arg0: VkVideoDecodeH265PictureInfoKHR): VkVideoDecodeH265PictureInfoKHR;
    sizeof(): number;
    sliceSegmentCount(): number;
}