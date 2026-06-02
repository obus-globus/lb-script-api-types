import type { Inet4Address } from '../../../java/net/Inet4Address.d.ts'
import type { Inet6Address } from '../../../java/net/Inet6Address.d.ts'
import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NetUtilSubstitutions extends Object {
    static LOCALHOST: InetAddress;
    static LOCALHOST4: Inet4Address;
    static LOCALHOST6: Inet6Address;
    static NETWORK_INTERFACES: E[];
    private constructor()
}