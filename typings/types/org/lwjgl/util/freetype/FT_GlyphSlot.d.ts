import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Bitmap } from '../../../../org/lwjgl/util/freetype/FT_Bitmap.d.ts'
import type { FT_Face } from '../../../../org/lwjgl/util/freetype/FT_Face.d.ts'
import type { FT_Generic } from '../../../../org/lwjgl/util/freetype/FT_Generic.d.ts'
import type { FT_Glyph_Metrics } from '../../../../org/lwjgl/util/freetype/FT_Glyph_Metrics.d.ts'
import type { FT_Outline } from '../../../../org/lwjgl/util/freetype/FT_Outline.d.ts'
import type { FT_Vector } from '../../../../org/lwjgl/util/freetype/FT_Vector.d.ts'
export class FT_GlyphSlot extends Struct<FT_GlyphSlot> {
    static ADVANCE: number;
    static ALIGNOF: number;
    static BITMAP: number;
    static BITMAP_LEFT: number;
    static BITMAP_TOP: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONTROL_DATA: number;
    static CONTROL_LEN: number;
    static FACE: number;
    static FORMAT: number;
    static GENERIC: number;
    static GLYPH_INDEX: number;
    static INTERNAL: number;
    static LIBRARY: number;
    static LINEARHORIADVANCE: number;
    static LINEARVERTADVANCE: number;
    static LSB_DELTA: number;
    static METRICS: number;
    static NEXT: number;
    static NUM_SUBGLYPHS: number;
    static OTHER: number;
    static OUTLINE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RSB_DELTA: number;
    static SIZEOF: number;
    static SUBGLYPHS: number;
    static create(paramarg0: number): FT_GlyphSlot;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_GlyphSlot;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nadvance(paramarg0: number): FT_Vector;
    static nbitmap(paramarg0: number): FT_Bitmap;
    static nbitmap_left(paramarg0: number): number;
    static nbitmap_top(paramarg0: number): number;
    static ncontrol_data(paramarg0: number): ByteBuffer;
    static ncontrol_len(paramarg0: number): number;
    static nface(paramarg0: number): FT_Face;
    static nformat(paramarg0: number): number;
    static ngeneric(paramarg0: number): FT_Generic;
    static nglyph_index(paramarg0: number): number;
    static ninternal(paramarg0: number): number;
    static nlibrary(paramarg0: number): number;
    static nlinearHoriAdvance(paramarg0: number): number;
    static nlinearVertAdvance(paramarg0: number): number;
    static nlsb_delta(paramarg0: number): number;
    static nmetrics(paramarg0: number): FT_Glyph_Metrics;
    static nnext(paramarg0: number): FT_GlyphSlot;
    static nnum_subglyphs(paramarg0: number): number;
    static nother(paramarg0: number): number;
    static noutline(paramarg0: number): FT_Outline;
    static nrsb_delta(paramarg0: number): number;
    static nsubglyphs(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    advance(): FT_Vector;
    bitmap(): FT_Bitmap;
    bitmap_left(): number;
    bitmap_top(): number;
    create(arg0: number, arg1: ByteBuffer): FT_GlyphSlot;
    face(): FT_Face;
    format(): number;
    generic(): FT_Generic;
    glyph_index(): number;
    library(): number;
    linearHoriAdvance(): number;
    linearVertAdvance(): number;
    lsb_delta(): number;
    metrics(): FT_Glyph_Metrics;
    next(): FT_GlyphSlot;
    outline(): FT_Outline;
    rsb_delta(): number;
    sizeof(): number;
}