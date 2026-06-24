import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoDecodeH265PictureInfoFlags extends Struct<StdVideoDecodeH265PictureInfoFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoDecodeH265PictureInfoFlags;
    static calloc(paramarg0: MemoryStack): StdVideoDecodeH265PictureInfoFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoDecodeH265PictureInfoFlags;
    static create(paramarg0: number): StdVideoDecodeH265PictureInfoFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoDecodeH265PictureInfoFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoDecodeH265PictureInfoFlags;
    static malloc(paramarg0: MemoryStack): StdVideoDecodeH265PictureInfoFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nIdrPicFlag(paramarg0: number): number;
    static nIdrPicFlag(paramarg0: number, paramarg1: number): void;
    static nIrapPicFlag(paramarg0: number): number;
    static nIrapPicFlag(paramarg0: number, paramarg1: number): void;
    static nIsReference(paramarg0: number): number;
    static nIsReference(paramarg0: number, paramarg1: number): void;
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nshort_term_ref_pic_set_sps_flag(paramarg0: number): number;
    static nshort_term_ref_pic_set_sps_flag(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    IdrPicFlag(): boolean;
    IdrPicFlag(arg0: boolean): StdVideoDecodeH265PictureInfoFlags;
    IrapPicFlag(): boolean;
    IrapPicFlag(arg0: boolean): StdVideoDecodeH265PictureInfoFlags;
    IsReference(): boolean;
    IsReference(arg0: boolean): StdVideoDecodeH265PictureInfoFlags;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoDecodeH265PictureInfoFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): StdVideoDecodeH265PictureInfoFlags;
    set(arg0: StdVideoDecodeH265PictureInfoFlags): StdVideoDecodeH265PictureInfoFlags;
    short_term_ref_pic_set_sps_flag(): boolean;
    short_term_ref_pic_set_sps_flag(arg0: boolean): StdVideoDecodeH265PictureInfoFlags;
    sizeof(): number;
}