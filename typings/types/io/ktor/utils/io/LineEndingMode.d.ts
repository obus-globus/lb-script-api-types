import type { LineEndingMode$Companion } from '../../../../io/ktor/utils/io/LineEndingMode$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LineEndingMode extends Object {
    static Companion: LineEndingMode$Companion;
// (invalid TS: name contains '-')     static box-impl(paramarg0: number): LineEndingMode;
// (invalid TS: name contains '-')     static contains-lTjpP64(other: LineEndingMode): boolean;
// (invalid TS: name contains '-')     static equals-impl(paramarg0: number, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: number, paramarg1: number): boolean;
// (invalid TS: name contains '-')     static hashCode-impl(paramarg0: number): number;
// (invalid TS: name contains '-')     static plus-1Ter-O4(other: LineEndingMode): LineEndingMode;
// (invalid TS: name contains '-')     static toString-impl(): string;
    private constructor(mode: number)
    // private mode: number;
    contains(other: LineEndingMode): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    plus(other: LineEndingMode): LineEndingMode;
    toString(): string;
}