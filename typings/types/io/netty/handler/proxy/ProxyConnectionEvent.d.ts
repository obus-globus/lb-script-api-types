import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProxyConnectionEvent extends Object {
    constructor(arg0: string, arg1: string, arg2: SocketAddress, arg3: SocketAddress)
    // private authScheme: string;
    // private destinationAddress: SocketAddress;
    // private protocol: string;
    // private proxyAddress: SocketAddress;
    // private strVal: string;
    authScheme(): string;
    destinationAddress<T extends SocketAddress>(): T;
    protocol(): string;
    proxyAddress<T extends SocketAddress>(): T;
    toString(): string;
}