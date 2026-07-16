import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoDecodeVP9PictureInfo } from '../../../org/lwjgl/vulkan/video/StdVideoDecodeVP9PictureInfo.d.ts'
export class VkVideoDecodeVP9PictureInfoKHR extends Struct<VkVideoDecodeVP9PictureInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPRESSEDHEADEROFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTDPICTUREINFO: number;
    static REFERENCENAMESLOTINDICES: number;
    static SIZEOF: number;
    static STYPE: number;
    static TILESOFFSET: number;
    static UNCOMPRESSEDHEADEROFFSET: number;
    static calloc(): VkVideoDecodeVP9PictureInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoDecodeVP9PictureInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoDecodeVP9PictureInfoKHR;
    static create(paramarg0: number): VkVideoDecodeVP9PictureInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoDecodeVP9PictureInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoDecodeVP9PictureInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoDecodeVP9PictureInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncompressedHeaderOffset(paramarg0: number): number;
    static ncompressedHeaderOffset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStdPictureInfo(paramarg0: number): StdVideoDecodeVP9PictureInfo;
    static npStdPictureInfo(paramarg0: number, paramarg1: StdVideoDecodeVP9PictureInfo): void;
    static nreferenceNameSlotIndices(paramarg0: number, paramarg1: number): number;
    static nreferenceNameSlotIndices(paramarg0: number): IntBuffer;
    static nreferenceNameSlotIndices(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nreferenceNameSlotIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntilesOffset(paramarg0: number): number;
    static ntilesOffset(paramarg0: number, paramarg1: number): void;
    static nuncompressedHeaderOffset(paramarg0: number): number;
    static nuncompressedHeaderOffset(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    compressedHeaderOffset(): number;
    compressedHeaderOffset(arg0: number): VkVideoDecodeVP9PictureInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkVideoDecodeVP9PictureInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoDecodeVP9PictureInfoKHR;
    pStdPictureInfo(): StdVideoDecodeVP9PictureInfo;
    pStdPictureInfo(arg0: StdVideoDecodeVP9PictureInfo): VkVideoDecodeVP9PictureInfoKHR;
    referenceNameSlotIndices(): IntBuffer;
    referenceNameSlotIndices(arg0: IntBuffer): VkVideoDecodeVP9PictureInfoKHR;
    referenceNameSlotIndices(arg0: number): number;
    referenceNameSlotIndices(arg0: number, arg1: number): VkVideoDecodeVP9PictureInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoDecodeVP9PictureInfoKHR;
    sType$Default(): VkVideoDecodeVP9PictureInfoKHR;
    set(arg0: number, arg1: number, arg2: StdVideoDecodeVP9PictureInfo, arg3: IntBuffer, arg4: number, arg5: number, arg6: number): VkVideoDecodeVP9PictureInfoKHR;
    set(arg0: VkVideoDecodeVP9PictureInfoKHR): VkVideoDecodeVP9PictureInfoKHR;
    sizeof(): number;
    tilesOffset(): number;
    tilesOffset(arg0: number): VkVideoDecodeVP9PictureInfoKHR;
    uncompressedHeaderOffset(): number;
    uncompressedHeaderOffset(arg0: number): VkVideoDecodeVP9PictureInfoKHR;
}