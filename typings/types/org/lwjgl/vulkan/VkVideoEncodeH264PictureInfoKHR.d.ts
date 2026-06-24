import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeH264PictureInfo } from '../../../org/lwjgl/vulkan/video/StdVideoEncodeH264PictureInfo.d.ts'
export class VkVideoEncodeH264PictureInfoKHR extends Struct<VkVideoEncodeH264PictureInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GENERATEPREFIXNALU: number;
    static NALUSLICEENTRYCOUNT: number;
    static PNALUSLICEENTRIES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTDPICTUREINFO: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeH264PictureInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH264PictureInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH264PictureInfoKHR;
    static create(paramarg0: number): VkVideoEncodeH264PictureInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH264PictureInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH264PictureInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH264PictureInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ngeneratePrefixNalu(paramarg0: number): number;
    static ngeneratePrefixNalu(paramarg0: number, paramarg1: number): void;
    static nnaluSliceEntryCount(paramarg0: number): number;
    static nnaluSliceEntryCount(paramarg0: number, paramarg1: number): void;
    static npNaluSliceEntries(paramarg0: number): (Object | null)[];
    static npNaluSliceEntries(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStdPictureInfo(paramarg0: number): StdVideoEncodeH264PictureInfo;
    static npStdPictureInfo(paramarg0: number, paramarg1: StdVideoEncodeH264PictureInfo): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH264PictureInfoKHR;
    generatePrefixNalu(): boolean;
    generatePrefixNalu(arg0: boolean): VkVideoEncodeH264PictureInfoKHR;
    naluSliceEntryCount(): number;
    pNaluSliceEntries(): (Object | null)[];
    pNaluSliceEntries(arg0: (Object | null)[]): VkVideoEncodeH264PictureInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeH264PictureInfoKHR;
    pStdPictureInfo(): StdVideoEncodeH264PictureInfo;
    pStdPictureInfo(arg0: StdVideoEncodeH264PictureInfo): VkVideoEncodeH264PictureInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeH264PictureInfoKHR;
    sType$Default(): VkVideoEncodeH264PictureInfoKHR;
    set(arg0: number, arg1: number, arg2: (Object | null)[], arg3: StdVideoEncodeH264PictureInfo, arg4: boolean): VkVideoEncodeH264PictureInfoKHR;
    set(arg0: VkVideoEncodeH264PictureInfoKHR): VkVideoEncodeH264PictureInfoKHR;
    sizeof(): number;
}