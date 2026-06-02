import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
export class DatagramSocketAddress extends InetSocketAddress {
    static createUnresolved(paramarg0: string, paramarg1: number): InetSocketAddress;
    constructor(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: DatagramSocketAddress)
    // private localAddress: DatagramSocketAddress;
    // private receivedAmount: number;
    localAddress(): DatagramSocketAddress;
    receivedAmount(): number;
}