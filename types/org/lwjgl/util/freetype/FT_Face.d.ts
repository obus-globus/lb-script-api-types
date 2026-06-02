import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_BBox } from '../../../../org/lwjgl/util/freetype/FT_BBox.d.ts'
import type { FT_CharMap } from '../../../../org/lwjgl/util/freetype/FT_CharMap.d.ts'
import type { FT_Generic } from '../../../../org/lwjgl/util/freetype/FT_Generic.d.ts'
import type { FT_GlyphSlot } from '../../../../org/lwjgl/util/freetype/FT_GlyphSlot.d.ts'
import type { FT_List } from '../../../../org/lwjgl/util/freetype/FT_List.d.ts'
import type { FT_Memory } from '../../../../org/lwjgl/util/freetype/FT_Memory.d.ts'
import type { FT_Size } from '../../../../org/lwjgl/util/freetype/FT_Size.d.ts'
import type { FT_Stream } from '../../../../org/lwjgl/util/freetype/FT_Stream.d.ts'
export class FT_Face extends Struct<FT_Face> {
    static ALIGNOF: number;
    static ASCENDER: number;
    static AUTOHINT: number;
    static AVAILABLE_SIZES: number;
    static BBOX: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CHARMAP: number;
    static CHARMAPS: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCENDER: number;
    static DRIVER: number;
    static EXTENSIONS: number;
    static FACE_FLAGS: number;
    static FACE_INDEX: number;
    static FAMILY_NAME: number;
    static GENERIC: number;
    static GLYPH: number;
    static HEIGHT: number;
    static INTERNAL: number;
    static MAX_ADVANCE_HEIGHT: number;
    static MAX_ADVANCE_WIDTH: number;
    static MEMORY: number;
    static NUM_CHARMAPS: number;
    static NUM_FACES: number;
    static NUM_FIXED_SIZES: number;
    static NUM_GLYPHS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static SIZES_LIST: number;
    static STREAM: number;
    static STYLE_FLAGS: number;
    static STYLE_NAME: number;
    static UNDERLINE_POSITION: number;
    static UNDERLINE_THICKNESS: number;
    static UNITS_PER_EM: number;
    static create(paramarg0: number): FT_Face;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_Face;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nascender(paramarg0: number): number;
    static nautohint(paramarg0: number): FT_Generic;
    static navailable_sizes(paramarg0: number): (Object | null)[];
    static nbbox(paramarg0: number): FT_BBox;
    static ncharmap(paramarg0: number): FT_CharMap;
    static ncharmaps(paramarg0: number): PointerBuffer;
    static ndescender(paramarg0: number): number;
    static ndriver(paramarg0: number): number;
    static nextensions(paramarg0: number): number;
    static nface_flags(paramarg0: number): number;
    static nface_index(paramarg0: number): number;
    static nfamily_name(paramarg0: number): ByteBuffer;
    static nfamily_nameString(paramarg0: number): string;
    static ngeneric(paramarg0: number): FT_Generic;
    static nglyph(paramarg0: number): FT_GlyphSlot;
    static nheight(paramarg0: number): number;
    static ninternal(paramarg0: number): number;
    static nmax_advance_height(paramarg0: number): number;
    static nmax_advance_width(paramarg0: number): number;
    static nmemory(paramarg0: number): FT_Memory;
    static nnum_charmaps(paramarg0: number): number;
    static nnum_faces(paramarg0: number): number;
    static nnum_fixed_sizes(paramarg0: number): number;
    static nnum_glyphs(paramarg0: number): number;
    static nsize(paramarg0: number): FT_Size;
    static nsizes_list(paramarg0: number): FT_List;
    static nstream$(paramarg0: number): FT_Stream;
    static nstyle_flags(paramarg0: number): number;
    static nstyle_name(paramarg0: number): ByteBuffer;
    static nstyle_nameString(paramarg0: number): string;
    static nunderline_position(paramarg0: number): number;
    static nunderline_thickness(paramarg0: number): number;
    static nunits_per_EM(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    ascender(): number;
    available_sizes(): (Object | null)[];
    bbox(): FT_BBox;
    charmap(): FT_CharMap;
    charmaps(): PointerBuffer;
    create(arg0: number, arg1: ByteBuffer): FT_Face;
    descender(): number;
    face_flags(): number;
    face_index(): number;
    family_name(): ByteBuffer;
    family_nameString(): string;
    generic(): FT_Generic;
    glyph(): FT_GlyphSlot;
    height(): number;
    max_advance_height(): number;
    max_advance_width(): number;
    num_charmaps(): number;
    num_faces(): number;
    num_fixed_sizes(): number;
    num_glyphs(): number;
    size(): FT_Size;
    sizeof(): number;
    style_flags(): number;
    style_name(): ByteBuffer;
    style_nameString(): string;
    underline_position(): number;
    underline_thickness(): number;
    units_per_EM(): number;
}