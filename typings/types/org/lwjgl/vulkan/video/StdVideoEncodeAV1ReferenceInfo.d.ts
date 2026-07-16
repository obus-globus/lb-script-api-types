import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeAV1ExtensionHeader } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeAV1ExtensionHeader.d.ts'
import type { StdVideoEncodeAV1ReferenceInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeAV1ReferenceInfoFlags.d.ts'
export class StdVideoEncodeAV1ReferenceInfo extends Struct<StdVideoEncodeAV1ReferenceInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static FRAME_TYPE: number;
    static ORDERHINT: number;
    static PEXTENSIONHEADER: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REFFRAMEID: number;
    static RESERVED1: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeAV1ReferenceInfo;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeAV1ReferenceInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeAV1ReferenceInfo;
    static create(paramarg0: number): StdVideoEncodeAV1ReferenceInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeAV1ReferenceInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeAV1ReferenceInfo;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeAV1ReferenceInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nOrderHint(paramarg0: number): number;
    static nOrderHint(paramarg0: number, paramarg1: number): void;
    static nRefFrameId(paramarg0: number): number;
    static nRefFrameId(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoEncodeAV1ReferenceInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoEncodeAV1ReferenceInfoFlags): void;
    static nframe_type(paramarg0: number): number;
    static nframe_type(paramarg0: number, paramarg1: number): void;
    static npExtensionHeader(paramarg0: number): StdVideoEncodeAV1ExtensionHeader;
    static npExtensionHeader(paramarg0: number, paramarg1: StdVideoEncodeAV1ExtensionHeader): void;
    static nreserved1(paramarg0: number, paramarg1: number): number;
    static nreserved1(paramarg0: number): ByteBuffer;
    static nreserved1(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nreserved1(paramarg0: number, paramarg1: ByteBuffer): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    OrderHint(): number;
    OrderHint(arg0: number): StdVideoEncodeAV1ReferenceInfo;
    RefFrameId(): number;
    RefFrameId(arg0: number): StdVideoEncodeAV1ReferenceInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeAV1ReferenceInfo;
    flags(): StdVideoEncodeAV1ReferenceInfoFlags;
    flags(arg0: (param0: StdVideoEncodeAV1ReferenceInfoFlags) => void): StdVideoEncodeAV1ReferenceInfo;
    flags(arg0: StdVideoEncodeAV1ReferenceInfoFlags): StdVideoEncodeAV1ReferenceInfo;
    frame_type(): number;
    frame_type(arg0: number): StdVideoEncodeAV1ReferenceInfo;
    pExtensionHeader(): StdVideoEncodeAV1ExtensionHeader;
    pExtensionHeader(arg0: StdVideoEncodeAV1ExtensionHeader): StdVideoEncodeAV1ReferenceInfo;
    set(arg0: StdVideoEncodeAV1ReferenceInfo): StdVideoEncodeAV1ReferenceInfo;
    set(arg0: StdVideoEncodeAV1ReferenceInfoFlags, arg1: number, arg2: number, arg3: number, arg4: StdVideoEncodeAV1ExtensionHeader): StdVideoEncodeAV1ReferenceInfo;
    sizeof(): number;
}