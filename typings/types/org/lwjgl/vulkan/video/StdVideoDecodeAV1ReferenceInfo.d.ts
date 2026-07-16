import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoDecodeAV1ReferenceInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoDecodeAV1ReferenceInfoFlags.d.ts'
export class StdVideoDecodeAV1ReferenceInfo extends Struct<StdVideoDecodeAV1ReferenceInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static FRAME_TYPE: number;
    static ORDERHINT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REFFRAMESIGNBIAS: number;
    static SAVEDORDERHINTS: number;
    static SIZEOF: number;
    static calloc(): StdVideoDecodeAV1ReferenceInfo;
    static calloc(paramarg0: MemoryStack): StdVideoDecodeAV1ReferenceInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoDecodeAV1ReferenceInfo;
    static create(paramarg0: number): StdVideoDecodeAV1ReferenceInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoDecodeAV1ReferenceInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoDecodeAV1ReferenceInfo;
    static malloc(paramarg0: MemoryStack): StdVideoDecodeAV1ReferenceInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nOrderHint(paramarg0: number): number;
    static nOrderHint(paramarg0: number, paramarg1: number): void;
    static nRefFrameSignBias(paramarg0: number): number;
    static nRefFrameSignBias(paramarg0: number, paramarg1: number): void;
    static nSavedOrderHints(paramarg0: number, paramarg1: number): number;
    static nSavedOrderHints(paramarg0: number): ByteBuffer;
    static nSavedOrderHints(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nSavedOrderHints(paramarg0: number, paramarg1: ByteBuffer): void;
    static nflags(paramarg0: number): StdVideoDecodeAV1ReferenceInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoDecodeAV1ReferenceInfoFlags): void;
    static nframe_type(paramarg0: number): number;
    static nframe_type(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    OrderHint(): number;
    OrderHint(arg0: number): StdVideoDecodeAV1ReferenceInfo;
    RefFrameSignBias(): number;
    RefFrameSignBias(arg0: number): StdVideoDecodeAV1ReferenceInfo;
    SavedOrderHints(): ByteBuffer;
    SavedOrderHints(arg0: ByteBuffer): StdVideoDecodeAV1ReferenceInfo;
    SavedOrderHints(arg0: number): number;
    SavedOrderHints(arg0: number, arg1: number): StdVideoDecodeAV1ReferenceInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoDecodeAV1ReferenceInfo;
    flags(): StdVideoDecodeAV1ReferenceInfoFlags;
    flags(arg0: (param0: StdVideoDecodeAV1ReferenceInfoFlags) => void): StdVideoDecodeAV1ReferenceInfo;
    flags(arg0: StdVideoDecodeAV1ReferenceInfoFlags): StdVideoDecodeAV1ReferenceInfo;
    frame_type(): number;
    frame_type(arg0: number): StdVideoDecodeAV1ReferenceInfo;
    set(arg0: StdVideoDecodeAV1ReferenceInfo): StdVideoDecodeAV1ReferenceInfo;
    set(arg0: StdVideoDecodeAV1ReferenceInfoFlags, arg1: number, arg2: number, arg3: number, arg4: ByteBuffer): StdVideoDecodeAV1ReferenceInfo;
    sizeof(): number;
}