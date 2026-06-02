import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Glyph } from '../../../../org/lwjgl/util/freetype/FT_Glyph.d.ts'
import type { FT_Matrix } from '../../../../org/lwjgl/util/freetype/FT_Matrix.d.ts'
import type { FT_Size_Metrics } from '../../../../org/lwjgl/util/freetype/FT_Size_Metrics.d.ts'
import type { FT_Vector } from '../../../../org/lwjgl/util/freetype/FT_Vector.d.ts'
export class FT_SvgGlyph extends Struct<FT_SvgGlyph> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DELTA: number;
    static END_GLYPH_ID: number;
    static GLYPH_INDEX: number;
    static METRICS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static ROOT: number;
    static SIZEOF: number;
    static START_GLYPH_ID: number;
    static SVG_DOCUMENT: number;
    static SVG_DOCUMENT_LENGTH: number;
    static TRANSFORM: number;
    static UNITS_PER_EM: number;
    static create(paramarg0: number): FT_SvgGlyph;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_SvgGlyph;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static ndelta(paramarg0: number): FT_Vector;
    static nend_glyph_id(paramarg0: number): number;
    static nglyph_index(paramarg0: number): number;
    static nmetrics(paramarg0: number): FT_Size_Metrics;
    static nroot(paramarg0: number): FT_Glyph;
    static nstart_glyph_id(paramarg0: number): number;
    static nsvg_document(paramarg0: number): ByteBuffer;
    static nsvg_document_length(paramarg0: number): number;
    static ntransform(paramarg0: number): FT_Matrix;
    static nunits_per_EM(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): FT_SvgGlyph;
    delta(): FT_Vector;
    end_glyph_id(): number;
    glyph_index(): number;
    metrics(): FT_Size_Metrics;
    root(): FT_Glyph;
    sizeof(): number;
    start_glyph_id(): number;
    svg_document(): ByteBuffer;
    svg_document_length(): number;
    transform(): FT_Matrix;
    units_per_EM(): number;
}