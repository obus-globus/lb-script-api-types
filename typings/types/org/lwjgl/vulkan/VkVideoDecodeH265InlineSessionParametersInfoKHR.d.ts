import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoH265PictureParameterSet } from '../../../org/lwjgl/vulkan/video/StdVideoH265PictureParameterSet.d.ts'
import type { StdVideoH265SequenceParameterSet } from '../../../org/lwjgl/vulkan/video/StdVideoH265SequenceParameterSet.d.ts'
import type { StdVideoH265VideoParameterSet } from '../../../org/lwjgl/vulkan/video/StdVideoH265VideoParameterSet.d.ts'
export class VkVideoDecodeH265InlineSessionParametersInfoKHR extends Struct<VkVideoDecodeH265InlineSessionParametersInfoKHR> implements NativeResource {
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
    static PSTDVPS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    static create(paramarg0: number): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStdPPS(paramarg0: number): StdVideoH265PictureParameterSet;
    static npStdPPS(paramarg0: number, paramarg1: StdVideoH265PictureParameterSet): void;
    static npStdSPS(paramarg0: number): StdVideoH265SequenceParameterSet;
    static npStdSPS(paramarg0: number, paramarg1: StdVideoH265SequenceParameterSet): void;
    static npStdVPS(paramarg0: number): StdVideoH265VideoParameterSet;
    static npStdVPS(paramarg0: number, paramarg1: StdVideoH265VideoParameterSet): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    pStdPPS(): StdVideoH265PictureParameterSet;
    pStdPPS(arg0: StdVideoH265PictureParameterSet): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    pStdSPS(): StdVideoH265SequenceParameterSet;
    pStdSPS(arg0: StdVideoH265SequenceParameterSet): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    pStdVPS(): StdVideoH265VideoParameterSet;
    pStdVPS(arg0: StdVideoH265VideoParameterSet): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    sType$Default(): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    set(arg0: number, arg1: number, arg2: StdVideoH265VideoParameterSet, arg3: StdVideoH265SequenceParameterSet, arg4: StdVideoH265PictureParameterSet): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    set(arg0: VkVideoDecodeH265InlineSessionParametersInfoKHR): VkVideoDecodeH265InlineSessionParametersInfoKHR;
    sizeof(): number;
}