import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { LocalDate } from '../../../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../../../java/time/LocalTime.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProxyDate } from '../../../../org/graalvm/polyglot/proxy/ProxyDate.d.ts'
import type { ProxyTime } from '../../../../org/graalvm/polyglot/proxy/ProxyTime.d.ts'
import type { ProxyTimeZone } from '../../../../org/graalvm/polyglot/proxy/ProxyTimeZone.d.ts'
export interface ProxyInstant extends Object, ProxyDate, ProxyTime, ProxyTimeZone{
    asDate(): LocalDate;
    asInstant(): Instant;
    asTime(): LocalTime;
    asTimeZone(): ZoneId;
}