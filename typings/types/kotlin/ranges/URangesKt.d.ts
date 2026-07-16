import type { Object } from '../../java/lang/Object.d.ts'
import type { UByte } from '../../kotlin/UByte.d.ts'
import type { UInt } from '../../kotlin/UInt.d.ts'
import type { ULong } from '../../kotlin/ULong.d.ts'
import type { UShort } from '../../kotlin/UShort.d.ts'
import type { Random } from '../../kotlin/random/Random.d.ts'
import type { ClosedRange } from '../../kotlin/ranges/ClosedRange.d.ts'
import type { URangesKt___URangesKt } from '../../kotlin/ranges/URangesKt___URangesKt.d.ts'
export class URangesKt extends URangesKt___URangesKt {
// (invalid TS: name contains '-')     static coerceAtLeast-5PvTz6A(self: UShort, minimumValue: UShort): UShort;
// (invalid TS: name contains '-')     static coerceAtLeast-J1ME1BU(self: UInt, minimumValue: UInt): UInt;
// (invalid TS: name contains '-')     static coerceAtLeast-Kr8caGY(self: UByte, minimumValue: UByte): UByte;
// (invalid TS: name contains '-')     static coerceAtLeast-eb3DHEI(self: ULong, minimumValue: ULong): ULong;
// (invalid TS: name contains '-')     static coerceAtMost-5PvTz6A(self: UShort, maximumValue: UShort): UShort;
// (invalid TS: name contains '-')     static coerceAtMost-J1ME1BU(self: UInt, maximumValue: UInt): UInt;
// (invalid TS: name contains '-')     static coerceAtMost-Kr8caGY(self: UByte, maximumValue: UByte): UByte;
// (invalid TS: name contains '-')     static coerceAtMost-eb3DHEI(self: ULong, maximumValue: ULong): ULong;
// (invalid TS: name contains '-')     static coerceIn-JPwROB0(self: ULong, range: ClosedRange<ULong>): ULong;
// (invalid TS: name contains '-')     static coerceIn-VKSA0NQ(self: UShort, minimumValue: UShort, maximumValue: UShort): UShort;
// (invalid TS: name contains '-')     static coerceIn-WZ9TVnA(self: UInt, minimumValue: UInt, maximumValue: UInt): UInt;
// (invalid TS: name contains '-')     static coerceIn-b33U2AM(self: UByte, minimumValue: UByte, maximumValue: UByte): UByte;
// (invalid TS: name contains '-')     static coerceIn-sambcqE(self: ULong, minimumValue: ULong, maximumValue: ULong): ULong;
// (invalid TS: name contains '-')     static coerceIn-wuiCnnA(self: UInt, range: ClosedRange<UInt>): UInt;
// (invalid TS: name contains '-')     static contains-68kG9v0(self: (Object | null)[], value: UByte): boolean;
// (invalid TS: name contains '-')     static contains-Gab390E(self: (Object | null)[], value: UInt): boolean;
// (invalid TS: name contains '-')     static contains-ULb-yJY(self: (Object | null)[], value: UByte): boolean;
// (invalid TS: name contains '-')     static contains-ZsK3CEQ(self: (Object | null)[], value: UShort): boolean;
// (invalid TS: name contains '-')     static contains-fz5IDCE(self: (Object | null)[], value: ULong): boolean;
// (invalid TS: name contains '-')     static contains-uhHAxoY(self: (Object | null)[], value: UShort): boolean;
// (invalid TS: name contains '-')     static downTo-5PvTz6A(self: UShort, to: UShort): UInt[];
// (invalid TS: name contains '-')     static downTo-J1ME1BU(self: UInt, to: UInt): UInt[];
// (invalid TS: name contains '-')     static downTo-Kr8caGY(self: UByte, to: UByte): UInt[];
// (invalid TS: name contains '-')     static downTo-eb3DHEI(self: ULong, to: ULong): ULong[];
    static first(self: UInt[]): UInt;
    static first(self: ULong[]): ULong;
    static firstOrNull(self: UInt[]): UInt | null;
    static firstOrNull(self: ULong[]): ULong | null;
    static last(self: UInt[]): UInt;
    static last(self: ULong[]): ULong;
    static lastOrNull(self: UInt[]): UInt | null;
    static lastOrNull(self: ULong[]): ULong | null;
    static random(self: (Object | null)[], random: Random): UInt;
    static random(self: (Object | null)[], random: Random): ULong;
    static randomOrNull(self: (Object | null)[], random: Random): UInt | null;
    static randomOrNull(self: (Object | null)[], random: Random): ULong | null;
    static reversed(self: UInt[]): UInt[];
    static reversed(self: ULong[]): ULong[];
    static step(self: UInt[], step: number): UInt[];
    static step(self: ULong[], step: number): ULong[];
// (invalid TS: name contains '-')     static until-5PvTz6A(self: UShort, to: UShort): (Object | null)[];
// (invalid TS: name contains '-')     static until-J1ME1BU(self: UInt, to: UInt): (Object | null)[];
// (invalid TS: name contains '-')     static until-Kr8caGY(self: UByte, to: UByte): (Object | null)[];
// (invalid TS: name contains '-')     static until-eb3DHEI(self: ULong, to: ULong): (Object | null)[];
}