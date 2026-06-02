import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NetUtilInitializations$NetworkIfaceAndInetAddress extends Object {
    constructor(arg0: NetworkInterface, arg1: InetAddress)
    // private address: InetAddress;
    // private iface: NetworkInterface;
    address(): InetAddress;
    iface(): NetworkInterface;
}