import type { InetSocketAddress } from '../java/net/InetSocketAddress.d.ts'
import type { Proxy } from '../java/net/Proxy.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Address } from '../okhttp3/Address.d.ts'
export class Route extends Object {
    constructor(address: Address, proxy: Proxy, socketAddress: InetSocketAddress)
    // private address: Address;
    address(): Address;
    // private proxy: Proxy;
    proxy(): Proxy;
    // private socketAddress: InetSocketAddress;
    socketAddress(): InetSocketAddress;
    address(): Address;
    equals(other: Object | null): boolean;
    hashCode(): number;
    proxy(): Proxy;
    requiresTunnel(): boolean;
    socketAddress(): InetSocketAddress;
    toString(): string;
}