import type { UByte } from '../../kotlin/UByte.d.ts'
import type { UInt } from '../../kotlin/UInt.d.ts'
import type { ULong } from '../../kotlin/ULong.d.ts'
import type { UShort } from '../../kotlin/UShort.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
import type { USequencesKt___USequencesKt } from '../../kotlin/sequences/USequencesKt___USequencesKt.d.ts'
export class USequencesKt extends USequencesKt___USequencesKt {
    static sumOfUByte(self: Sequence<UByte>): UInt;
    static sumOfUInt(self: Sequence<UInt>): UInt;
    static sumOfULong(self: Sequence<ULong>): ULong;
    static sumOfUShort(self: Sequence<UShort>): UInt;
}