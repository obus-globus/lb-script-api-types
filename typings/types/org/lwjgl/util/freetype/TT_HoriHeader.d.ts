import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ShortBuffer } from '../../../../java/nio/ShortBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class TT_HoriHeader extends Struct<TT_HoriHeader> {
    static ADVANCE_WIDTH_MAX: number;
    static ALIGNOF: number;
    static ASCENDER: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CARET_OFFSET: number;
    static CARET_SLOPE_RISE: number;
    static CARET_SLOPE_RUN: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCENDER: number;
    static LINE_GAP: number;
    static LONG_METRICS: number;
    static METRIC_DATA_FORMAT: number;
    static MIN_LEFT_SIDE_BEARING: number;
    static MIN_RIGHT_SIDE_BEARING: number;
    static NUMBER_OF_HMETRICS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESERVED: number;
    static SHORT_METRICS: number;
    static SIZEOF: number;
    static VERSION: number;
    static XMAX_EXTENT: number;
    static create(paramarg0: number): TT_HoriHeader;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): TT_HoriHeader;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nAscender(paramarg0: number): number;
    static nDescender(paramarg0: number): number;
    static nLine_Gap(paramarg0: number): number;
    static nReserved(paramarg0: number): ShortBuffer;
    static nReserved(paramarg0: number, paramarg1: number): number;
    static nVersion(paramarg0: number): number;
    static nadvance_Width_Max(paramarg0: number): number;
    static ncaret_Offset(paramarg0: number): number;
    static ncaret_Slope_Rise(paramarg0: number): number;
    static ncaret_Slope_Run(paramarg0: number): number;
    static nlong_metrics(paramarg0: number, paramarg1: number): ByteBuffer;
    static nmetric_Data_Format(paramarg0: number): number;
    static nmin_Left_Side_Bearing(paramarg0: number): number;
    static nmin_Right_Side_Bearing(paramarg0: number): number;
    static nnumber_Of_HMetrics(paramarg0: number): number;
    static nshort_metrics(paramarg0: number, paramarg1: number): ByteBuffer;
    static nxMax_Extent(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    Ascender(): number;
    Descender(): number;
    Line_Gap(): number;
    Reserved(): ShortBuffer;
    Reserved(arg0: number): number;
    Version(): number;
    advance_Width_Max(): number;
    caret_Offset(): number;
    caret_Slope_Rise(): number;
    caret_Slope_Run(): number;
    create(arg0: number, arg1: ByteBuffer): TT_HoriHeader;
    long_metrics(arg0: number): ByteBuffer;
    metric_Data_Format(): number;
    min_Left_Side_Bearing(): number;
    min_Right_Side_Bearing(): number;
    number_Of_HMetrics(): number;
    short_metrics(arg0: number): ByteBuffer;
    sizeof(): number;
    xMax_Extent(): number;
}