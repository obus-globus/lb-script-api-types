import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoDecodeH264PictureInfo } from '../../../org/lwjgl/vulkan/video/StdVideoDecodeH264PictureInfo.d.ts'
export class VkVideoDecodeH264PictureInfoKHR extends Struct<VkVideoDecodeH264PictureInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSLICEOFFSETS: number;
    static PSTDPICTUREINFO: number;
    static SIZEOF: number;
    static SLICECOUNT: number;
    static STYPE: number;
    static calloc(): VkVideoDecodeH264PictureInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoDecodeH264PictureInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoDecodeH264PictureInfoKHR;
    static create(paramarg0: number): VkVideoDecodeH264PictureInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoDecodeH264PictureInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoDecodeH264PictureInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoDecodeH264PictureInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSliceOffsets(paramarg0: number): IntBuffer;
    static npSliceOffsets(paramarg0: number, paramarg1: IntBuffer): void;
    static npStdPictureInfo(paramarg0: number): StdVideoDecodeH264PictureInfo;
    static npStdPictureInfo(paramarg0: number, paramarg1: StdVideoDecodeH264PictureInfo): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsliceCount(paramarg0: number): number;
    static nsliceCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoDecodeH264PictureInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoDecodeH264PictureInfoKHR;
    pSliceOffsets(): IntBuffer;
    pSliceOffsets(arg0: IntBuffer): VkVideoDecodeH264PictureInfoKHR;
    pStdPictureInfo(): StdVideoDecodeH264PictureInfo;
    pStdPictureInfo(arg0: StdVideoDecodeH264PictureInfo): VkVideoDecodeH264PictureInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoDecodeH264PictureInfoKHR;
    sType$Default(): VkVideoDecodeH264PictureInfoKHR;
    set(arg0: number, arg1: number, arg2: StdVideoDecodeH264PictureInfo, arg3: IntBuffer): VkVideoDecodeH264PictureInfoKHR;
    set(arg0: VkVideoDecodeH264PictureInfoKHR): VkVideoDecodeH264PictureInfoKHR;
    sizeof(): number;
    sliceCount(): number;
}