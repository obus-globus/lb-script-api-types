import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoEncodeH265ReferenceInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoEncodeH265ReferenceInfoFlags.d.ts'
export class StdVideoEncodeH265ReferenceInfo extends Struct<StdVideoEncodeH265ReferenceInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PICORDERCNTVAL: number;
    static PIC_TYPE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TEMPORALID: number;
    static calloc(): StdVideoEncodeH265ReferenceInfo;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH265ReferenceInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH265ReferenceInfo;
    static create(paramarg0: number): StdVideoEncodeH265ReferenceInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH265ReferenceInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH265ReferenceInfo;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH265ReferenceInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nPicOrderCntVal(paramarg0: number): number;
    static nPicOrderCntVal(paramarg0: number, paramarg1: number): void;
    static nTemporalId(paramarg0: number): number;
    static nTemporalId(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoEncodeH265ReferenceInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoEncodeH265ReferenceInfoFlags): void;
    static npic_type(paramarg0: number): number;
    static npic_type(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    PicOrderCntVal(): number;
    PicOrderCntVal(arg0: number): StdVideoEncodeH265ReferenceInfo;
    TemporalId(): number;
    TemporalId(arg0: number): StdVideoEncodeH265ReferenceInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH265ReferenceInfo;
    flags(): StdVideoEncodeH265ReferenceInfoFlags;
    flags(arg0: (param0: StdVideoEncodeH265ReferenceInfoFlags) => void): StdVideoEncodeH265ReferenceInfo;
    flags(arg0: StdVideoEncodeH265ReferenceInfoFlags): StdVideoEncodeH265ReferenceInfo;
    pic_type(): number;
    pic_type(arg0: number): StdVideoEncodeH265ReferenceInfo;
    set(arg0: StdVideoEncodeH265ReferenceInfo): StdVideoEncodeH265ReferenceInfo;
    set(arg0: StdVideoEncodeH265ReferenceInfoFlags, arg1: number, arg2: number, arg3: number): StdVideoEncodeH265ReferenceInfo;
    sizeof(): number;
}