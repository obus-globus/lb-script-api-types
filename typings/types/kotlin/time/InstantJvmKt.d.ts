import type { Object } from '../../java/lang/Object.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
export class InstantJvmKt extends Object {
    static serializedInstant(instant: Instant): Object;
    static systemClockNow(): Instant;
}