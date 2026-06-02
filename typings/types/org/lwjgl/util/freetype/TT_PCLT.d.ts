import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class TT_PCLT extends Struct<TT_PCLT> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CAPHEIGHT: number;
    static CHARACTERCOMPLEMENT: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FILENAME: number;
    static FONTNUMBER: number;
    static PITCH: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESERVED: number;
    static SERIFSTYLE: number;
    static SIZEOF: number;
    static STROKEWEIGHT: number;
    static STYLE: number;
    static SYMBOLSET: number;
    static TYPEFACE: number;
    static TYPEFAMILY: number;
    static VERSION: number;
    static WIDTHTYPE: number;
    static XHEIGHT: number;
    static create(paramarg0: number): TT_PCLT;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): TT_PCLT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nCapHeight(paramarg0: number): number;
    static nCharacterComplement(paramarg0: number, paramarg1: number): number;
    static nCharacterComplement(paramarg0: number): ByteBuffer;
    static nFileName(paramarg0: number, paramarg1: number): number;
    static nFileName(paramarg0: number): ByteBuffer;
    static nFontNumber(paramarg0: number): number;
    static nPitch(paramarg0: number): number;
    static nReserved(paramarg0: number): number;
    static nSerifStyle(paramarg0: number): number;
    static nStrokeWeight(paramarg0: number): number;
    static nStyle(paramarg0: number): number;
    static nSymbolSet(paramarg0: number): number;
    static nTypeFace(paramarg0: number, paramarg1: number): number;
    static nTypeFace(paramarg0: number): ByteBuffer;
    static nTypeFamily(paramarg0: number): number;
    static nVersion(paramarg0: number): number;
    static nWidthType(paramarg0: number): number;
    static nxHeight(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    CapHeight(): number;
    CharacterComplement(): ByteBuffer;
    CharacterComplement(arg0: number): number;
    FileName(): ByteBuffer;
    FileName(arg0: number): number;
    FontNumber(): number;
    Pitch(): number;
    Reserved(): number;
    SerifStyle(): number;
    StrokeWeight(): number;
    Style(): number;
    SymbolSet(): number;
    TypeFace(): ByteBuffer;
    TypeFace(arg0: number): number;
    TypeFamily(): number;
    Version(): number;
    WidthType(): number;
    create(arg0: number, arg1: ByteBuffer): TT_PCLT;
    sizeof(): number;
    xHeight(): number;
}