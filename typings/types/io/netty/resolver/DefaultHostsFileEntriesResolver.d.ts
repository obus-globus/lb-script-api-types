import type { HostsFileEntriesProvider$Parser } from '../../../io/netty/resolver/HostsFileEntriesProvider$Parser.d.ts'
import type { HostsFileEntriesResolver } from '../../../io/netty/resolver/HostsFileEntriesResolver.d.ts'
import type { ResolvedAddressTypes } from '../../../io/netty/resolver/ResolvedAddressTypes.d.ts'
import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultHostsFileEntriesResolver extends Object implements HostsFileEntriesResolver {
    static DEFAULT: HostsFileEntriesResolver;
    constructor()
    constructor(arg0: HostsFileEntriesProvider$Parser, arg1: number)
    // private hostsFileParser: HostsFileEntriesProvider$Parser;
    // private inet4Entries: { [key: string]: InetAddress[] };
    // private inet6Entries: { [key: string]: InetAddress[] };
    // private lastRefresh: AtomicLong;
    // private refreshInterval: number;
    address(arg0: string, arg1: ResolvedAddressTypes): InetAddress;
    addresses(arg0: string, arg1: ResolvedAddressTypes): InetAddress[];
    // private ensureHostsFileEntriesAreFresh(): void;
    normalize(arg0: string): string;
}