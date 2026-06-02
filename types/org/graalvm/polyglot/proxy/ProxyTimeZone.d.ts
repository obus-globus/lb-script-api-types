import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Proxy } from '../../../../org/graalvm/polyglot/proxy/Proxy.d.ts'
export interface ProxyTimeZone extends Object, Proxy{
    asTimeZone(): ZoneId;
}