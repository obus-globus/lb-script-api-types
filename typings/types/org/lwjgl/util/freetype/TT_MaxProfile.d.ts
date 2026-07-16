import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class TT_MaxProfile extends Struct<TT_MaxProfile> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXCOMPONENTDEPTH: number;
    static MAXCOMPONENTELEMENTS: number;
    static MAXCOMPOSITECONTOURS: number;
    static MAXCOMPOSITEPOINTS: number;
    static MAXCONTOURS: number;
    static MAXFUNCTIONDEFS: number;
    static MAXINSTRUCTIONDEFS: number;
    static MAXPOINTS: number;
    static MAXSIZEOFINSTRUCTIONS: number;
    static MAXSTACKELEMENTS: number;
    static MAXSTORAGE: number;
    static MAXTWILIGHTPOINTS: number;
    static MAXZONES: number;
    static NUMGLYPHS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static VERSION: number;
    static create(paramarg0: number): TT_MaxProfile;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): TT_MaxProfile;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nmaxComponentDepth(paramarg0: number): number;
    static nmaxComponentElements(paramarg0: number): number;
    static nmaxCompositeContours(paramarg0: number): number;
    static nmaxCompositePoints(paramarg0: number): number;
    static nmaxContours(paramarg0: number): number;
    static nmaxFunctionDefs(paramarg0: number): number;
    static nmaxInstructionDefs(paramarg0: number): number;
    static nmaxPoints(paramarg0: number): number;
    static nmaxSizeOfInstructions(paramarg0: number): number;
    static nmaxStackElements(paramarg0: number): number;
    static nmaxStorage(paramarg0: number): number;
    static nmaxTwilightPoints(paramarg0: number): number;
    static nmaxZones(paramarg0: number): number;
    static nnumGlyphs(paramarg0: number): number;
    static nversion(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): TT_MaxProfile;
    maxComponentDepth(): number;
    maxComponentElements(): number;
    maxCompositeContours(): number;
    maxCompositePoints(): number;
    maxContours(): number;
    maxFunctionDefs(): number;
    maxInstructionDefs(): number;
    maxPoints(): number;
    maxSizeOfInstructions(): number;
    maxStackElements(): number;
    maxStorage(): number;
    maxTwilightPoints(): number;
    maxZones(): number;
    numGlyphs(): number;
    sizeof(): number;
    version(): number;
}