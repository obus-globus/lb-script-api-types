import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoDecodeH264PictureInfoFlags extends Struct<StdVideoDecodeH264PictureInfoFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoDecodeH264PictureInfoFlags;
    static calloc(paramarg0: MemoryStack): StdVideoDecodeH264PictureInfoFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoDecodeH264PictureInfoFlags;
    static create(paramarg0: number): StdVideoDecodeH264PictureInfoFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoDecodeH264PictureInfoFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoDecodeH264PictureInfoFlags;
    static malloc(paramarg0: MemoryStack): StdVideoDecodeH264PictureInfoFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nIdrPicFlag(paramarg0: number): number;
    static nIdrPicFlag(paramarg0: number, paramarg1: number): void;
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nbottom_field_flag(paramarg0: number): number;
    static nbottom_field_flag(paramarg0: number, paramarg1: number): void;
    static ncomplementary_field_pair(paramarg0: number): number;
    static ncomplementary_field_pair(paramarg0: number, paramarg1: number): void;
    static nfield_pic_flag(paramarg0: number): number;
    static nfield_pic_flag(paramarg0: number, paramarg1: number): void;
    static nis_intra(paramarg0: number): number;
    static nis_intra(paramarg0: number, paramarg1: number): void;
    static nis_reference(paramarg0: number): number;
    static nis_reference(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    IdrPicFlag(): boolean;
    IdrPicFlag(arg0: boolean): StdVideoDecodeH264PictureInfoFlags;
    bottom_field_flag(): boolean;
    bottom_field_flag(arg0: boolean): StdVideoDecodeH264PictureInfoFlags;
    close(): void;
    complementary_field_pair(): boolean;
    complementary_field_pair(arg0: boolean): StdVideoDecodeH264PictureInfoFlags;
    create(arg0: number, arg1: ByteBuffer): StdVideoDecodeH264PictureInfoFlags;
    field_pic_flag(): boolean;
    field_pic_flag(arg0: boolean): StdVideoDecodeH264PictureInfoFlags;
    is_intra(): boolean;
    is_intra(arg0: boolean): StdVideoDecodeH264PictureInfoFlags;
    is_reference(): boolean;
    is_reference(arg0: boolean): StdVideoDecodeH264PictureInfoFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): StdVideoDecodeH264PictureInfoFlags;
    set(arg0: StdVideoDecodeH264PictureInfoFlags): StdVideoDecodeH264PictureInfoFlags;
    sizeof(): number;
}