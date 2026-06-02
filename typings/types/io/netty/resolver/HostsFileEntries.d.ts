import type { Inet4Address } from '../../../java/net/Inet4Address.d.ts'
import type { Inet6Address } from '../../../java/net/Inet6Address.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HostsFileEntries extends Object {
    constructor(arg0: { [key: string]: Inet4Address }, arg1: { [key: string]: Inet6Address })
    // private inet4Entries: { [key: string]: Inet4Address };
    // private inet6Entries: { [key: string]: Inet6Address };
    inet4Entries(): { [key: string]: Inet4Address };
    inet6Entries(): { [key: string]: Inet6Address };
}