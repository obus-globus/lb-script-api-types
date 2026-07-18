import type { SocketAddress } from '../../../../io/ktor/network/sockets/SocketAddress.d.ts'
import type { InetSocketAddress as InetSocketAddress_2 } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InetSocketAddress extends SocketAddress {
    constructor(address: InetSocketAddress_2)
    constructor(address: number[], port: number)
    constructor(hostname: string, port: number)
    // private address: InetSocketAddress_2;
    /*not mapped: */ getAddress$ktor_network(): InetSocketAddress_2;
    readonly hostname: string;
    readonly port: number;
    component1(): string;
    component2(): number;
    copy(hostname: string, port: number): InetSocketAddress;
    equals(other: Object | null): boolean;
    hashCode(): number;
    resolveAddress(): number[] | null;
    toString(): string;
}