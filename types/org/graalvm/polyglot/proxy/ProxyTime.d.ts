import type { LocalTime } from '../../../../java/time/LocalTime.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Proxy } from '../../../../org/graalvm/polyglot/proxy/Proxy.d.ts'
export interface ProxyTime extends Object, Proxy{
    asTime(): LocalTime;
}