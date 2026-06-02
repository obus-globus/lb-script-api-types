import type { Object } from '../../java/lang/Object.d.ts'
import type { Clock } from '../../kotlin/time/Clock.d.ts'
import type { Clock$Companion } from '../../kotlin/time/Clock$Companion.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
export class Clock$System extends Object implements Clock {
    static Companion: Clock$Companion;
    static INSTANCE: Clock$System;
    now(): Instant;
}