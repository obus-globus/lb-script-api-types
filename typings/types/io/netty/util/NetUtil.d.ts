import type { Inet4Address } from '../../../java/net/Inet4Address.d.ts'
import type { Inet6Address } from '../../../java/net/Inet6Address.d.ts'
import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../java/net/InetSocketAddress.d.ts'
import type { NetworkInterface } from '../../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class NetUtil extends Object {
    static LOCALHOST: InetAddress;
    static LOCALHOST4: Inet4Address;
    static LOCALHOST6: Inet6Address;
    static LOOPBACK_IF: NetworkInterface;
    static NETWORK_INTERFACES: NetworkInterface[];
    static SOMAXCONN: number;
    static bytesToIpAddress(paramarg0: number[]): string;
    static bytesToIpAddress(paramarg0: number[], paramarg1: number, paramarg2: number): string;
    static createByteArrayFromIpAddressString(paramarg0: string): number[];
    static createInetAddressFromIpAddressString(paramarg0: string): InetAddress;
    static getByName(paramarg0: CharSequence): Inet6Address;
    static getByName(paramarg0: CharSequence, paramarg1: boolean): Inet6Address;
    static getHostname(paramarg0: InetSocketAddress): string;
    static intToIpAddress(paramarg0: number): string;
    static ipv4AddressToInt(paramarg0: Inet4Address): number;
    static isIpV4StackPreferred(): boolean;
    static isIpV6AddressesPreferred(): boolean;
    static isValidIpV4Address(paramarg0: CharSequence): boolean;
    static isValidIpV4Address(paramarg0: string): boolean;
    static isValidIpV6Address(paramarg0: CharSequence): boolean;
    static isValidIpV6Address(paramarg0: string): boolean;
    static toAddressString(paramarg0: InetAddress): string;
    static toAddressString(paramarg0: InetAddress, paramarg1: boolean): string;
    static toSocketAddressString(paramarg0: string, paramarg1: number): string;
    static toSocketAddressString(paramarg0: InetSocketAddress): string;
    private constructor()
}