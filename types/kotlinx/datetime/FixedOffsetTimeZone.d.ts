import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { FixedOffsetTimeZone$Companion } from '../../kotlinx/datetime/FixedOffsetTimeZone$Companion.d.ts'
import type { TimeZone } from '../../kotlinx/datetime/TimeZone.d.ts'
import type { TimeZone$Companion } from '../../kotlinx/datetime/TimeZone$Companion.d.ts'
import type { UtcOffset } from '../../kotlinx/datetime/UtcOffset.d.ts'
export class FixedOffsetTimeZone extends TimeZone {
    static Companion: FixedOffsetTimeZone$Companion;
    static Companion: TimeZone$Companion;
    constructor(offset: UtcOffset)
    constructor(offset: UtcOffset, zoneId: ZoneId)
    readonly offset: UtcOffset;
    readonly totalSeconds: number;
}