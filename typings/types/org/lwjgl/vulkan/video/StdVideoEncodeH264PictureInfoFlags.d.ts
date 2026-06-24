import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class StdVideoEncodeH264PictureInfoFlags extends Struct<StdVideoEncodeH264PictureInfoFlags> implements NativeResource {
    static ALIGNOF: number;
    static BITFIELD0: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): StdVideoEncodeH264PictureInfoFlags;
    static calloc(paramarg0: MemoryStack): StdVideoEncodeH264PictureInfoFlags;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): StdVideoEncodeH264PictureInfoFlags;
    static create(paramarg0: number): StdVideoEncodeH264PictureInfoFlags;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): StdVideoEncodeH264PictureInfoFlags;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): StdVideoEncodeH264PictureInfoFlags;
    static malloc(paramarg0: MemoryStack): StdVideoEncodeH264PictureInfoFlags;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nIdrPicFlag(paramarg0: number): number;
    static nIdrPicFlag(paramarg0: number, paramarg1: number): void;
    static nadaptive_ref_pic_marking_mode_flag(paramarg0: number): number;
    static nadaptive_ref_pic_marking_mode_flag(paramarg0: number, paramarg1: number): void;
    static nbitfield0(paramarg0: number): number;
    static nbitfield0(paramarg0: number, paramarg1: number): void;
    static nis_reference(paramarg0: number): number;
    static nis_reference(paramarg0: number, paramarg1: number): void;
    static nlong_term_reference_flag(paramarg0: number): number;
    static nlong_term_reference_flag(paramarg0: number, paramarg1: number): void;
    static nno_output_of_prior_pics_flag(paramarg0: number): number;
    static nno_output_of_prior_pics_flag(paramarg0: number, paramarg1: number): void;
    static nreserved(paramarg0: number): number;
    static nreserved(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    IdrPicFlag(): boolean;
    IdrPicFlag(arg0: boolean): StdVideoEncodeH264PictureInfoFlags;
    adaptive_ref_pic_marking_mode_flag(): boolean;
    adaptive_ref_pic_marking_mode_flag(arg0: boolean): StdVideoEncodeH264PictureInfoFlags;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): StdVideoEncodeH264PictureInfoFlags;
    is_reference(): boolean;
    is_reference(arg0: boolean): StdVideoEncodeH264PictureInfoFlags;
    long_term_reference_flag(): boolean;
    long_term_reference_flag(arg0: boolean): StdVideoEncodeH264PictureInfoFlags;
    no_output_of_prior_pics_flag(): boolean;
    no_output_of_prior_pics_flag(arg0: boolean): StdVideoEncodeH264PictureInfoFlags;
    set(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): StdVideoEncodeH264PictureInfoFlags;
    set(arg0: StdVideoEncodeH264PictureInfoFlags): StdVideoEncodeH264PictureInfoFlags;
    sizeof(): number;
}