import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoDecodeAV1PictureInfo } from '../../../org/lwjgl/vulkan/video/StdVideoDecodeAV1PictureInfo.d.ts'
export class VkVideoDecodeAV1PictureInfoKHR extends Struct<VkVideoDecodeAV1PictureInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAMEHEADEROFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTDPICTUREINFO: number;
    static PTILEOFFSETS: number;
    static PTILESIZES: number;
    static REFERENCENAMESLOTINDICES: number;
    static SIZEOF: number;
    static STYPE: number;
    static TILECOUNT: number;
    static calloc(): VkVideoDecodeAV1PictureInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoDecodeAV1PictureInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoDecodeAV1PictureInfoKHR;
    static create(paramarg0: number): VkVideoDecodeAV1PictureInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoDecodeAV1PictureInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoDecodeAV1PictureInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoDecodeAV1PictureInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nframeHeaderOffset(paramarg0: number): number;
    static nframeHeaderOffset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStdPictureInfo(paramarg0: number): StdVideoDecodeAV1PictureInfo;
    static npStdPictureInfo(paramarg0: number, paramarg1: StdVideoDecodeAV1PictureInfo): void;
    static npTileOffsets(paramarg0: number): IntBuffer;
    static npTileOffsets(paramarg0: number, paramarg1: IntBuffer): void;
    static npTileSizes(paramarg0: number): IntBuffer;
    static npTileSizes(paramarg0: number, paramarg1: IntBuffer): void;
    static nreferenceNameSlotIndices(paramarg0: number, paramarg1: number): number;
    static nreferenceNameSlotIndices(paramarg0: number): IntBuffer;
    static nreferenceNameSlotIndices(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nreferenceNameSlotIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntileCount(paramarg0: number): number;
    static ntileCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoDecodeAV1PictureInfoKHR;
    frameHeaderOffset(): number;
    frameHeaderOffset(arg0: number): VkVideoDecodeAV1PictureInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoDecodeAV1PictureInfoKHR;
    pStdPictureInfo(): StdVideoDecodeAV1PictureInfo;
    pStdPictureInfo(arg0: StdVideoDecodeAV1PictureInfo): VkVideoDecodeAV1PictureInfoKHR;
    pTileOffsets(): IntBuffer;
    pTileOffsets(arg0: IntBuffer): VkVideoDecodeAV1PictureInfoKHR;
    pTileSizes(): IntBuffer;
    pTileSizes(arg0: IntBuffer): VkVideoDecodeAV1PictureInfoKHR;
    referenceNameSlotIndices(): IntBuffer;
    referenceNameSlotIndices(arg0: IntBuffer): VkVideoDecodeAV1PictureInfoKHR;
    referenceNameSlotIndices(arg0: number): number;
    referenceNameSlotIndices(arg0: number, arg1: number): VkVideoDecodeAV1PictureInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoDecodeAV1PictureInfoKHR;
    sType$Default(): VkVideoDecodeAV1PictureInfoKHR;
    set(arg0: number, arg1: number, arg2: StdVideoDecodeAV1PictureInfo, arg3: IntBuffer, arg4: number, arg5: number, arg6: IntBuffer, arg7: IntBuffer): VkVideoDecodeAV1PictureInfoKHR;
    set(arg0: VkVideoDecodeAV1PictureInfoKHR): VkVideoDecodeAV1PictureInfoKHR;
    sizeof(): number;
    tileCount(): number;
    tileCount(arg0: number): VkVideoDecodeAV1PictureInfoKHR;
}