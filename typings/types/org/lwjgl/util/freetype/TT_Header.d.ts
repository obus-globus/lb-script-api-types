import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CLongBuffer } from '../../../../org/lwjgl/CLongBuffer.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class TT_Header extends Struct<TT_Header> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CHECKSUM_ADJUST: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CREATED: number;
    static FLAGS: number;
    static FONT_DIRECTION: number;
    static FONT_REVISION: number;
    static GLYPH_DATA_FORMAT: number;
    static INDEX_TO_LOC_FORMAT: number;
    static LOWEST_REC_PPEM: number;
    static MAC_STYLE: number;
    static MAGIC_NUMBER: number;
    static MODIFIED: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TABLE_VERSION: number;
    static UNITS_PER_EM: number;
    static XMAX: number;
    static XMIN: number;
    static YMAX: number;
    static YMIN: number;
    static create(paramarg0: number): TT_Header;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): TT_Header;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nCheckSum_Adjust(paramarg0: number): number;
    static nCreated(paramarg0: number, paramarg1: number): number;
    static nCreated(paramarg0: number): CLongBuffer;
    static nFlags(paramarg0: number): number;
    static nFont_Direction(paramarg0: number): number;
    static nFont_Revision(paramarg0: number): number;
    static nGlyph_Data_Format(paramarg0: number): number;
    static nIndex_To_Loc_Format(paramarg0: number): number;
    static nLowest_Rec_PPEM(paramarg0: number): number;
    static nMac_Style(paramarg0: number): number;
    static nMagic_Number(paramarg0: number): number;
    static nModified(paramarg0: number, paramarg1: number): number;
    static nModified(paramarg0: number): CLongBuffer;
    static nTable_Version(paramarg0: number): number;
    static nUnits_Per_EM(paramarg0: number): number;
    static nxMax(paramarg0: number): number;
    static nxMin(paramarg0: number): number;
    static nyMax(paramarg0: number): number;
    static nyMin(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    CheckSum_Adjust(): number;
    Created(): CLongBuffer;
    Created(arg0: number): number;
    Flags(): number;
    Font_Direction(): number;
    Font_Revision(): number;
    Glyph_Data_Format(): number;
    Index_To_Loc_Format(): number;
    Lowest_Rec_PPEM(): number;
    Mac_Style(): number;
    Magic_Number(): number;
    Modified(): CLongBuffer;
    Modified(arg0: number): number;
    Table_Version(): number;
    Units_Per_EM(): number;
    create(arg0: number, arg1: ByteBuffer): TT_Header;
    sizeof(): number;
    xMax(): number;
    xMin(): number;
    yMax(): number;
    yMin(): number;
}