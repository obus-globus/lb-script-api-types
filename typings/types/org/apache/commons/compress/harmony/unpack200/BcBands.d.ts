import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/unpack200/BandSet.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/unpack200/Segment.d.ts'
export class BcBands extends BandSet {
    constructor(arg0: Segment)
    readonly bcByte: number[];
    readonly bcCaseCount: number[];
    readonly bcCaseValue: number[];
    readonly bcClassRef: number[];
    readonly bcDoubleRef: number[];
    // private bcEscByte: number[][];
    // private bcEscRef: number[];
    // private bcEscRefSize: number[];
    // private bcEscSize: number[];
    readonly bcFieldRef: number[];
    readonly bcFloatRef: number[];
    readonly bcIMethodRef: number[];
    readonly bcInitRef: number[];
    readonly bcIntRef: number[];
    readonly bcLabel: number[];
    readonly bcLocal: number[];
    readonly bcLongRef: number[];
    readonly bcMethodRef: number[];
    readonly bcShort: number[];
    readonly bcStringRef: number[];
    readonly bcSuperField: number[];
    readonly bcSuperMethod: number[];
    readonly bcThisField: number[];
    readonly bcThisMethod: number[];
    readonly methodByteCodePacked: number[][][];
    // private wideByteCodes: number[];
    // private endsWithLoad(arg0: number): boolean;
    // private endsWithStore(arg0: number): boolean;
    getBcByte(): number[];
    getBcCaseCount(): number[];
    getBcCaseValue(): number[];
    getBcClassRef(): number[];
    getBcDoubleRef(): number[];
    getBcFieldRef(): number[];
    getBcFloatRef(): number[];
    getBcIMethodRef(): number[];
    getBcInitRef(): number[];
    getBcIntRef(): number[];
    getBcLabel(): number[];
    getBcLocal(): number[];
    getBcLongRef(): number[];
    getBcMethodRef(): number[];
    getBcShort(): number[];
    getBcStringRef(): number[];
    getBcSuperField(): number[];
    getBcSuperMethod(): number[];
    getBcThisField(): number[];
    getBcThisMethod(): number[];
    getMethodByteCodePacked(): number[][][];
    read(arg0: InputStream): void;
    // private startsWithIf(arg0: number): boolean;
    unpack(): void;
}