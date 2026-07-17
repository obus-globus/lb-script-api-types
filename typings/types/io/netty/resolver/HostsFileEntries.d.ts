import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Inet4Address } from '../../../java/net/Inet4Address.d.ts'
import type { Inet6Address } from '../../../java/net/Inet6Address.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HostsFileEntries extends Object {
    constructor(arg0: JavaMap<string, Inet4Address>, arg1: JavaMap<string, Inet6Address>)
    // private inet4Entries: JavaMap<string, Inet4Address>;
    // private inet6Entries: JavaMap<string, Inet6Address>;
    inet4Entries(): JavaMap<string, Inet4Address>;
    inet6Entries(): JavaMap<string, Inet6Address>;
}