import type { LocalDate } from '../../../../java/time/LocalDate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Proxy } from '../../../../org/graalvm/polyglot/proxy/Proxy.d.ts'
export interface ProxyDate extends Object, Proxy{
    asDate(): LocalDate;
}