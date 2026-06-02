import type { DomainSocketAddress } from '../../../../io/netty/channel/unix/DomainSocketAddress.d.ts'
export class DomainDatagramSocketAddress extends DomainSocketAddress {
    constructor(arg0: number[], arg1: number, arg2: DomainDatagramSocketAddress)
    // private localAddress: DomainDatagramSocketAddress;
    // private receivedAmount: number;
    localAddress(): DomainDatagramSocketAddress;
    receivedAmount(): number;
}