import type { NetherNetAddress } from '../../../../../dev/kastle/netty/channel/nethernet/config/NetherNetAddress.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
export class NetherNetInetSocketAddress extends InetSocketAddress {
    static createUnresolved(paramarg0: string, paramarg1: number): InetSocketAddress;
    constructor(arg0: NetherNetAddress)
    readonly netherNetAddress: NetherNetAddress;
    getNetherNetAddress(): NetherNetAddress;
}