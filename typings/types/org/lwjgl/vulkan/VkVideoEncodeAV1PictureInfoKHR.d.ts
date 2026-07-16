import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeAV1PictureInfo } from '../../../org/lwjgl/vulkan/video/StdVideoEncodeAV1PictureInfo.d.ts'
export class VkVideoEncodeAV1PictureInfoKHR extends Struct<VkVideoEncodeAV1PictureInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONSTANTQINDEX: number;
    static GENERATEOBUEXTENSIONHEADER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREDICTIONMODE: number;
    static PRIMARYREFERENCECDFONLY: number;
    static PSTDPICTUREINFO: number;
    static RATECONTROLGROUP: number;
    static REFERENCENAMESLOTINDICES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeAV1PictureInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeAV1PictureInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeAV1PictureInfoKHR;
    static create(paramarg0: number): VkVideoEncodeAV1PictureInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeAV1PictureInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeAV1PictureInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeAV1PictureInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nconstantQIndex(paramarg0: number): number;
    static nconstantQIndex(paramarg0: number, paramarg1: number): void;
    static ngenerateObuExtensionHeader(paramarg0: number): number;
    static ngenerateObuExtensionHeader(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStdPictureInfo(paramarg0: number): StdVideoEncodeAV1PictureInfo;
    static npStdPictureInfo(paramarg0: number, paramarg1: StdVideoEncodeAV1PictureInfo): void;
    static npredictionMode(paramarg0: number): number;
    static npredictionMode(paramarg0: number, paramarg1: number): void;
    static nprimaryReferenceCdfOnly(paramarg0: number): number;
    static nprimaryReferenceCdfOnly(paramarg0: number, paramarg1: number): void;
    static nrateControlGroup(paramarg0: number): number;
    static nrateControlGroup(paramarg0: number, paramarg1: number): void;
    static nreferenceNameSlotIndices(paramarg0: number, paramarg1: number): number;
    static nreferenceNameSlotIndices(paramarg0: number): IntBuffer;
    static nreferenceNameSlotIndices(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nreferenceNameSlotIndices(paramarg0: number, paramarg1: IntBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    constantQIndex(): number;
    constantQIndex(arg0: number): VkVideoEncodeAV1PictureInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeAV1PictureInfoKHR;
    generateObuExtensionHeader(): boolean;
    generateObuExtensionHeader(arg0: boolean): VkVideoEncodeAV1PictureInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeAV1PictureInfoKHR;
    pStdPictureInfo(): StdVideoEncodeAV1PictureInfo;
    pStdPictureInfo(arg0: StdVideoEncodeAV1PictureInfo): VkVideoEncodeAV1PictureInfoKHR;
    predictionMode(): number;
    predictionMode(arg0: number): VkVideoEncodeAV1PictureInfoKHR;
    primaryReferenceCdfOnly(): boolean;
    primaryReferenceCdfOnly(arg0: boolean): VkVideoEncodeAV1PictureInfoKHR;
    rateControlGroup(): number;
    rateControlGroup(arg0: number): VkVideoEncodeAV1PictureInfoKHR;
    referenceNameSlotIndices(): IntBuffer;
    referenceNameSlotIndices(arg0: IntBuffer): VkVideoEncodeAV1PictureInfoKHR;
    referenceNameSlotIndices(arg0: number): number;
    referenceNameSlotIndices(arg0: number, arg1: number): VkVideoEncodeAV1PictureInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeAV1PictureInfoKHR;
    sType$Default(): VkVideoEncodeAV1PictureInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: StdVideoEncodeAV1PictureInfo, arg6: IntBuffer, arg7: boolean, arg8: boolean): VkVideoEncodeAV1PictureInfoKHR;
    set(arg0: VkVideoEncodeAV1PictureInfoKHR): VkVideoEncodeAV1PictureInfoKHR;
    sizeof(): number;
}