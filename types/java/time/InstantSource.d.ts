import type { Clock } from '../../java/time/Clock.d.ts'
import type { Instant } from '../../java/time/Instant.d.ts'
import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface InstantSource extends Object{
    instant(): Instant;
    millis(): number;
    withZone(arg0: ZoneId): Clock;
}