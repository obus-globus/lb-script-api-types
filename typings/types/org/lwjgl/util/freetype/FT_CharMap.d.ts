import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { FT_Face } from '../../../../org/lwjgl/util/freetype/FT_Face.d.ts'
export class FT_CharMap extends Struct<FT_CharMap> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static ENCODING: number;
    static ENCODING_ID: number;
    static FACE: number;
    static PLATFORM_ID: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static create(paramarg0: number): FT_CharMap;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): FT_CharMap;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nencoding(paramarg0: number): number;
    static nencoding_id(paramarg0: number): number;
    static nface(paramarg0: number): FT_Face;
    static nplatform_id(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): FT_CharMap;
    encoding(): number;
    encoding_id(): number;
    face(): FT_Face;
    platform_id(): number;
    sizeof(): number;
}