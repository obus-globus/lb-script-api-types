import type { Object } from '../../java/lang/Object.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
export class URandomKt extends Object {
// (invalid TS: name contains '-')     static checkUIntRangeBounds-J1ME1BU(paramarg0: number, paramarg1: number): void;
// (invalid TS: name contains '-')     static checkULongRangeBounds-eb3DHEI(paramarg0: number, paramarg1: number): void;
    static nextUBytes(paramarg0: Random, paramarg1: number): number[];
// (invalid TS: name contains '-')     static nextUBytes-EVgfTAA(paramarg0: Random, paramarg1: number[]): number[];
// (invalid TS: name contains '-')     static nextUBytes-Wvrt4B4(paramarg0: Random, paramarg1: number[], paramarg2: number, paramarg3: number): number[];
    static nextUInt(paramarg0: Random): number;
    static nextUInt(paramarg0: Random, paramarg1: (Object | null)[]): number;
// (invalid TS: name contains '-')     static nextUInt-a8DCA5k(paramarg0: Random, paramarg1: number, paramarg2: number): number;
// (invalid TS: name contains '-')     static nextUInt-qCasIEU(paramarg0: Random, paramarg1: number): number;
    static nextULong(paramarg0: Random): number;
    static nextULong(paramarg0: Random, paramarg1: (Object | null)[]): number;
// (invalid TS: name contains '-')     static nextULong-V1Xi4fY(paramarg0: Random, paramarg1: number): number;
// (invalid TS: name contains '-')     static nextULong-jmpaW-c(paramarg0: Random, paramarg1: number, paramarg2: number): number;
}