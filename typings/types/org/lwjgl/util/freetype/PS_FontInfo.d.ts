import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class PS_FontInfo extends Struct<PS_FontInfo> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FAMILY_NAME: number;
    static FULL_NAME: number;
    static IS_FIXED_PITCH: number;
    static ITALIC_ANGLE: number;
    static NOTICE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static UNDERLINE_POSITION: number;
    static UNDERLINE_THICKNESS: number;
    static VERSION: number;
    static WEIGHT: number;
    static create(paramarg0: number): PS_FontInfo;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): PS_FontInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nfamily_name(paramarg0: number): ByteBuffer;
    static nfamily_nameString(paramarg0: number): string;
    static nfull_name(paramarg0: number): ByteBuffer;
    static nfull_nameString(paramarg0: number): string;
    static nis_fixed_pitch(paramarg0: number): boolean;
    static nitalic_angle(paramarg0: number): number;
    static nnotice(paramarg0: number): ByteBuffer;
    static nnoticeString(paramarg0: number): string;
    static nunderline_position(paramarg0: number): number;
    static nunderline_thickness(paramarg0: number): number;
    static nversion(paramarg0: number): ByteBuffer;
    static nversionString(paramarg0: number): string;
    static nweight(paramarg0: number): ByteBuffer;
    static nweightString(paramarg0: number): string;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): PS_FontInfo;
    family_name(): ByteBuffer;
    family_nameString(): string;
    full_name(): ByteBuffer;
    full_nameString(): string;
    is_fixed_pitch(): boolean;
    italic_angle(): number;
    notice(): ByteBuffer;
    noticeString(): string;
    sizeof(): number;
    underline_position(): number;
    underline_thickness(): number;
    version(): ByteBuffer;
    versionString(): string;
    weight(): ByteBuffer;
    weightString(): string;
}