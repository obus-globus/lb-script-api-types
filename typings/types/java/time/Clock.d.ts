import type { Duration } from '../../java/time/Duration.d.ts'
import type { Instant } from '../../java/time/Instant.d.ts'
import type { InstantSource } from '../../java/time/InstantSource.d.ts'
import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class Clock extends Object implements InstantSource {
    static fixed(paramarg0: Instant, paramarg1: ZoneId): Clock;
    static fixed(paramarg0: Instant): InstantSource;
    static offset(paramarg0: Clock, paramarg1: Duration): Clock;
    static offset(paramarg0: InstantSource, paramarg1: Duration): InstantSource;
    static system(paramarg0: ZoneId): Clock;
    static system(): InstantSource;
    static systemDefaultZone(): Clock;
    static systemUTC(): Clock;
    static tick(paramarg0: Clock, paramarg1: Duration): Clock;
    static tick(paramarg0: InstantSource, paramarg1: Duration): InstantSource;
    static tickMillis(paramarg0: ZoneId): Clock;
    static tickMinutes(paramarg0: ZoneId): Clock;
    static tickSeconds(paramarg0: ZoneId): Clock;
    constructor()
    equals(arg0: Object | null): boolean;
    getZone(): ZoneId;
    hashCode(): number;
    instant(): Instant;
    millis(): number;
    millis(): number;
    withZone(arg0: ZoneId): Clock;
    withZone(arg0: ZoneId): Clock;
}