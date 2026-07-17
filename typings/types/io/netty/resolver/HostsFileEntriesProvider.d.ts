import type { JavaMap } from '../../../JavaMap.d.ts'
import type { HostsFileEntriesProvider$Parser } from '../../../io/netty/resolver/HostsFileEntriesProvider$Parser.d.ts'
import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HostsFileEntriesProvider extends Object {
    static parser(): HostsFileEntriesProvider$Parser;
    constructor(arg0: JavaMap<string, InetAddress[]>, arg1: JavaMap<string, InetAddress[]>)
    // private ipv4Entries: JavaMap<string, InetAddress[]>;
    // private ipv6Entries: JavaMap<string, InetAddress[]>;
    ipv4Entries(): JavaMap<string, InetAddress[]>;
    ipv6Entries(): JavaMap<string, InetAddress[]>;
}