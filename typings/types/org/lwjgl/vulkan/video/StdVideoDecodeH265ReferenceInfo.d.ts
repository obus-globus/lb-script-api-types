import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { StdVideoDecodeH265ReferenceInfoFlags } from '../../../../org/lwjgl/vulkan/video/StdVideoDecodeH265ReferenceInfoFlags.d.ts'
export class StdVideoDecodeH265ReferenceInfo extends Struct<StdVideoDecodeH265ReferenceInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PICORDERCNTVAL: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoDecodeH265ReferenceInfo;
    static calloc(paramarg0: MemoryStack): StdVideoDecodeH265ReferenceInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoDecodeH265ReferenceInfo;
    static create(paramarg0: number): StdVideoDecodeH265ReferenceInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoDecodeH265ReferenceInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoDecodeH265ReferenceInfo;
    static malloc(paramarg0: MemoryStack): StdVideoDecodeH265ReferenceInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nPicOrderCntVal(paramarg0: number): number;
    static nPicOrderCntVal(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): StdVideoDecodeH265ReferenceInfoFlags;
    static nflags(paramarg0: number, paramarg1: StdVideoDecodeH265ReferenceInfoFlags): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    PicOrderCntVal(): number;
    PicOrderCntVal(arg0: number): StdVideoDecodeH265ReferenceInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoDecodeH265ReferenceInfo;
    flags(): StdVideoDecodeH265ReferenceInfoFlags;
    flags(arg0: (param0: StdVideoDecodeH265ReferenceInfoFlags) => void): StdVideoDecodeH265ReferenceInfo;
    flags(arg0: StdVideoDecodeH265ReferenceInfoFlags): StdVideoDecodeH265ReferenceInfo;
    set(arg0: StdVideoDecodeH265ReferenceInfo): StdVideoDecodeH265ReferenceInfo;
    set(arg0: StdVideoDecodeH265ReferenceInfoFlags, arg1: number): StdVideoDecodeH265ReferenceInfo;
    sizeof(): number;
}