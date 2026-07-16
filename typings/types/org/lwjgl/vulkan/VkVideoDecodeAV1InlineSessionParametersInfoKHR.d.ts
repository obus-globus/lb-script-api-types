import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoAV1SequenceHeader } from '../../../org/lwjgl/vulkan/video/StdVideoAV1SequenceHeader.d.ts'
export class VkVideoDecodeAV1InlineSessionParametersInfoKHR extends Struct<VkVideoDecodeAV1InlineSessionParametersInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTDSEQUENCEHEADER: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    static create(paramarg0: number): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStdSequenceHeader(paramarg0: number): StdVideoAV1SequenceHeader;
    static npStdSequenceHeader(paramarg0: number, paramarg1: StdVideoAV1SequenceHeader): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    pStdSequenceHeader(): StdVideoAV1SequenceHeader;
    pStdSequenceHeader(arg0: StdVideoAV1SequenceHeader): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    sType$Default(): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    set(arg0: number, arg1: number, arg2: StdVideoAV1SequenceHeader): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    set(arg0: VkVideoDecodeAV1InlineSessionParametersInfoKHR): VkVideoDecodeAV1InlineSessionParametersInfoKHR;
    sizeof(): number;
}