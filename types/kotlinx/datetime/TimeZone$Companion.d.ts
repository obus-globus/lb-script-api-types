import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { FixedOffsetTimeZone } from '../../kotlinx/datetime/FixedOffsetTimeZone.d.ts'
import type { TimeZone } from '../../kotlinx/datetime/TimeZone.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
export class TimeZone$Companion extends Object {
    readonly UTC: FixedOffsetTimeZone;
    readonly availableZoneIds: string[];
    currentSystemDefault(): TimeZone;
    of(zoneId: string): TimeZone;
    ofZone(zoneId: ZoneId): TimeZone;
    serializer(): KSerializer<TimeZone>;
}