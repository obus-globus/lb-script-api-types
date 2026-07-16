import type { Object } from '../../java/lang/Object.d.ts'
import type { UByte } from '../../kotlin/UByte.d.ts'
import type { UInt } from '../../kotlin/UInt.d.ts'
import type { ULong } from '../../kotlin/ULong.d.ts'
import type { UShort } from '../../kotlin/UShort.d.ts'
export class UCollectionsKt___UCollectionsKt extends Object {
    static sumOfUByte(self: UByte[]): UInt;
    static sumOfUInt(self: UInt[]): UInt;
    static sumOfULong(self: ULong[]): ULong;
    static sumOfUShort(self: UShort[]): UInt;
    static toUByteArray(self: UByte[]): (Object | null)[];
    static toUIntArray(self: UInt[]): (Object | null)[];
    static toULongArray(self: ULong[]): (Object | null)[];
    static toUShortArray(self: UShort[]): (Object | null)[];
}