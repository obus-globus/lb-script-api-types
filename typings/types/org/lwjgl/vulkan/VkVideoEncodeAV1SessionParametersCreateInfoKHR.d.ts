import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoAV1SequenceHeader } from '../../../org/lwjgl/vulkan/video/StdVideoAV1SequenceHeader.d.ts'
import type { StdVideoEncodeAV1DecoderModelInfo } from '../../../org/lwjgl/vulkan/video/StdVideoEncodeAV1DecoderModelInfo.d.ts'
export class VkVideoEncodeAV1SessionParametersCreateInfoKHR extends Struct<VkVideoEncodeAV1SessionParametersCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTDDECODERMODELINFO: number;
    static PSTDOPERATINGPOINTS: number;
    static PSTDSEQUENCEHEADER: number;
    static SIZEOF: number;
    static STDOPERATINGPOINTCOUNT: number;
    static STYPE: number;
    static calloc(): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    static create(paramarg0: number): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStdDecoderModelInfo(paramarg0: number): StdVideoEncodeAV1DecoderModelInfo;
    static npStdDecoderModelInfo(paramarg0: number, paramarg1: StdVideoEncodeAV1DecoderModelInfo): void;
    static npStdOperatingPoints(paramarg0: number): (Object | null)[];
    static npStdOperatingPoints(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npStdSequenceHeader(paramarg0: number): StdVideoAV1SequenceHeader;
    static npStdSequenceHeader(paramarg0: number, paramarg1: StdVideoAV1SequenceHeader): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstdOperatingPointCount(paramarg0: number): number;
    static nstdOperatingPointCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    pStdDecoderModelInfo(): StdVideoEncodeAV1DecoderModelInfo;
    pStdDecoderModelInfo(arg0: StdVideoEncodeAV1DecoderModelInfo): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    pStdOperatingPoints(): (Object | null)[];
    pStdOperatingPoints(arg0: (Object | null)[]): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    pStdSequenceHeader(): StdVideoAV1SequenceHeader;
    pStdSequenceHeader(arg0: StdVideoAV1SequenceHeader): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    sType$Default(): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: StdVideoAV1SequenceHeader, arg3: StdVideoEncodeAV1DecoderModelInfo, arg4: number, arg5: (Object | null)[]): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    set(arg0: VkVideoEncodeAV1SessionParametersCreateInfoKHR): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
    sizeof(): number;
    stdOperatingPointCount(): number;
    stdOperatingPointCount(arg0: number): VkVideoEncodeAV1SessionParametersCreateInfoKHR;
}