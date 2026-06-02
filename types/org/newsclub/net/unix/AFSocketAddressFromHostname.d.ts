import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
export interface AFSocketAddressFromHostname<A extends AFSocketAddress> extends Object{
    addressFromHost(arg0: string, arg1: number): SocketAddress;
    isHostnameSupported(arg0: string): boolean;
}