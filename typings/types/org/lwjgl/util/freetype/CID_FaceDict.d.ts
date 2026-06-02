import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Matrix } from '../../../../org/lwjgl/util/freetype/FT_Matrix.d.ts'
import type { FT_Vector } from '../../../../org/lwjgl/util/freetype/FT_Vector.d.ts'
import type { PS_Private } from '../../../../org/lwjgl/util/freetype/PS_Private.d.ts'
export class CID_FaceDict extends Struct<CID_FaceDict> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXPANSION_FACTOR: number;
    static FONT_MATRIX: number;
    static FONT_OFFSET: number;
    static FONT_TYPE: number;
    static FORCEBOLD_THRESHOLD: number;
    static LEN_BUILDCHAR: number;
    static NUM_SUBRS: number;
    static PAINT_TYPE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRIVATE_DICT: number;
    static SD_BYTES: number;
    static SIZEOF: number;
    static STROKE_WIDTH: number;
    static SUBRMAP_OFFSET: number;
    static create(paramarg0: number): CID_FaceDict;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): CID_FaceDict;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nexpansion_factor(paramarg0: number): number;
    static nfont_matrix(paramarg0: number): FT_Matrix;
    static nfont_offset(paramarg0: number): FT_Vector;
    static nfont_type(paramarg0: number): number;
    static nforcebold_threshold(paramarg0: number): number;
    static nlen_buildchar(paramarg0: number): number;
    static nnum_subrs(paramarg0: number): number;
    static npaint_type(paramarg0: number): number;
    static nprivate_dict(paramarg0: number): PS_Private;
    static nsd_bytes(paramarg0: number): number;
    static nstroke_width(paramarg0: number): number;
    static nsubrmap_offset(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): CID_FaceDict;
    expansion_factor(): number;
    font_matrix(): FT_Matrix;
    font_offset(): FT_Vector;
    font_type(): number;
    forcebold_threshold(): number;
    len_buildchar(): number;
    num_subrs(): number;
    paint_type(): number;
    private_dict(): PS_Private;
    sd_bytes(): number;
    sizeof(): number;
    stroke_width(): number;
    subrmap_offset(): number;
}