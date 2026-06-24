import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoH264PictureParameterSet } from '../../../org/lwjgl/vulkan/video/StdVideoH264PictureParameterSet.d.ts'
import type { StdVideoH264SequenceParameterSet } from '../../../org/lwjgl/vulkan/video/StdVideoH264SequenceParameterSet.d.ts'
export class VkVideoDecodeH264InlineSessionParametersInfoKHR extends Struct<VkVideoDecodeH264InlineSessionParametersInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTDPPS: number;
    static PSTDSPS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    static create(paramarg0: number): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStdPPS(paramarg0: number): StdVideoH264PictureParameterSet;
    static npStdPPS(paramarg0: number, paramarg1: StdVideoH264PictureParameterSet): void;
    static npStdSPS(paramarg0: number): StdVideoH264SequenceParameterSet;
    static npStdSPS(paramarg0: number, paramarg1: StdVideoH264SequenceParameterSet): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    pStdPPS(): StdVideoH264PictureParameterSet;
    pStdPPS(arg0: StdVideoH264PictureParameterSet): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    pStdSPS(): StdVideoH264SequenceParameterSet;
    pStdSPS(arg0: StdVideoH264SequenceParameterSet): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    sType$Default(): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    set(arg0: number, arg1: number, arg2: StdVideoH264SequenceParameterSet, arg3: StdVideoH264PictureParameterSet): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    set(arg0: VkVideoDecodeH264InlineSessionParametersInfoKHR): VkVideoDecodeH264InlineSessionParametersInfoKHR;
    sizeof(): number;
}