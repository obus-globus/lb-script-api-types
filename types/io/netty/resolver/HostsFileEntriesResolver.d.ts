import type { ResolvedAddressTypes } from '../../../io/netty/resolver/ResolvedAddressTypes.d.ts'
import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HostsFileEntriesResolver extends Object{
    address(arg0: string, arg1: ResolvedAddressTypes): InetAddress;
}