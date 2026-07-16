import type { Object } from '../../java/lang/Object.d.ts'
import type { UInt } from '../../kotlin/UInt.d.ts'
import type { ULong } from '../../kotlin/ULong.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
export class URandomKt extends Object {
// (invalid TS: name contains '-')     static checkUIntRangeBounds-J1ME1BU(from: UInt, until: UInt): void;
// (invalid TS: name contains '-')     static checkULongRangeBounds-eb3DHEI(from: ULong, until: ULong): void;
    static nextUBytes(self: Random, size: number): (Object | null)[];
// (invalid TS: name contains '-')     static nextUBytes-EVgfTAA(self: Random, array: (Object | null)[]): (Object | null)[];
// (invalid TS: name contains '-')     static nextUBytes-Wvrt4B4(self: Random, array: (Object | null)[], fromIndex: number, toIndex: number): (Object | null)[];
    static nextUInt(self: Random): UInt;
    static nextUInt(self: Random, range: (Object | null)[]): UInt;
// (invalid TS: name contains '-')     static nextUInt-a8DCA5k(self: Random, from: UInt, until: UInt): UInt;
// (invalid TS: name contains '-')     static nextUInt-qCasIEU(self: Random, until: UInt): UInt;
    static nextULong(self: Random): ULong;
    static nextULong(self: Random, range: (Object | null)[]): ULong;
// (invalid TS: name contains '-')     static nextULong-V1Xi4fY(self: Random, until: ULong): ULong;
// (invalid TS: name contains '-')     static nextULong-jmpaW-c(self: Random, from: ULong, until: ULong): ULong;
}