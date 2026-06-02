import type { SocketAddress } from '../../../../../../java/net/SocketAddress.d.ts'
export class NetherNetAddress extends SocketAddress {
    constructor(arg0: number)
    constructor(arg0: string)
    readonly networkId: string;
    getNetworkId(): string;
    getNetworkIdAsLong(): number;
    toString(): string;
}