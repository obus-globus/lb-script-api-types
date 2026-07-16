import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoDecodeH264ReferenceInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoDecodeH264ReferenceInfoFlags.d.ts'
export class StdVideoDecodeH264ReferenceInfo extends Struct<StdVideoDecodeH264ReferenceInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static FRAMENUM: number;
    static PICORDERCNT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESERVED: number;
    static SIZEOF: number;
    static calloc(): StdVideoDecodeH264ReferenceInfo;
    static calloc(paramarg0: MemoryStack): StdVideoDecodeH264ReferenceInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoDecodeH264ReferenceInfo;
    static create(paramarg0: number): StdVideoDecodeH264ReferenceInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoDecodeH264ReferenceInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoDecodeH264ReferenceInfo;
    static malloc(paramarg0: MemoryStack): StdVideoDecodeH264ReferenceInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nFrameNum(paramarg0: number): number;
    static nFrameNum(paramarg0: number, paramarg1: number): void;
    static nPicOrderCnt(paramarg0: number, paramarg1: number): number;
    static nPicOrderCnt(paramarg0: number): IntBuffer;
    static nPicOrderCnt(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nPicOrderCnt(paramarg0: number, paramarg1: IntBuffer): void;
    static nflags(paramarg0: number): StdVideoDecodeH264ReferenceInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoDecodeH264ReferenceInfoFlags): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    FrameNum(): number;
    FrameNum(arg0: number): StdVideoDecodeH264ReferenceInfo;
    PicOrderCnt(): IntBuffer;
    PicOrderCnt(arg0: IntBuffer): StdVideoDecodeH264ReferenceInfo;
    PicOrderCnt(arg0: number): number;
    PicOrderCnt(arg0: number, arg1: number): StdVideoDecodeH264ReferenceInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoDecodeH264ReferenceInfo;
    flags(): StdVideoDecodeH264ReferenceInfoFlags;
    flags(arg0: (param0: StdVideoDecodeH264ReferenceInfoFlags) => void): StdVideoDecodeH264ReferenceInfo;
    flags(arg0: StdVideoDecodeH264ReferenceInfoFlags): StdVideoDecodeH264ReferenceInfo;
    set(arg0: StdVideoDecodeH264ReferenceInfo): StdVideoDecodeH264ReferenceInfo;
    set(arg0: StdVideoDecodeH264ReferenceInfoFlags, arg1: number, arg2: IntBuffer): StdVideoDecodeH264ReferenceInfo;
    sizeof(): number;
}