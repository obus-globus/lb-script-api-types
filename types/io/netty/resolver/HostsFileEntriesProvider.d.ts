import type { HostsFileEntriesProvider$Parser } from '../../../io/netty/resolver/HostsFileEntriesProvider$Parser.d.ts'
import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class HostsFileEntriesProvider extends Object {
    static parser(): HostsFileEntriesProvider$Parser;
    constructor(arg0: { [key: string]: InetAddress[] }, arg1: { [key: string]: InetAddress[] })
    // private ipv4Entries: { [key: string]: InetAddress[] };
    // private ipv6Entries: { [key: string]: InetAddress[] };
    ipv4Entries(): { [key: string]: InetAddress[] };
    ipv6Entries(): { [key: string]: InetAddress[] };
}