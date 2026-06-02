import type { InetAddresses$TeredoInfo } from '../../../../com/google/common/net/InetAddresses$TeredoInfo.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Inet4Address } from '../../../../java/net/Inet4Address.d.ts'
import type { Inet6Address } from '../../../../java/net/Inet6Address.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InetAddresses extends Object {
    static coerceToInteger(paramip: InetAddress): number;
    static decrement(paramaddress: InetAddress): InetAddress;
    static forString(paramipString: string): InetAddress;
    static forUriString(paramhostAddr: string): InetAddress;
    static fromIPv4BigInteger(paramaddress: BigInteger): Inet4Address;
    static fromIPv6BigInteger(paramaddress: BigInteger): Inet6Address;
    static fromInteger(paramaddress: number): Inet4Address;
    static fromLittleEndianByteArray(paramaddr: number[]): InetAddress;
    static get6to4IPv4Address(paramip: Inet6Address): Inet4Address;
    static getCoercedIPv4Address(paramip: InetAddress): Inet4Address;
    static getCompatIPv4Address(paramip: Inet6Address): Inet4Address;
    static getEmbeddedIPv4ClientAddress(paramip: Inet6Address): Inet4Address;
    static getIsatapIPv4Address(paramip: Inet6Address): Inet4Address;
    static getTeredoInfo(paramip: Inet6Address): InetAddresses$TeredoInfo;
    static hasEmbeddedIPv4ClientAddress(paramip: Inet6Address): boolean;
    static increment(paramaddress: InetAddress): InetAddress;
    static is6to4Address(paramip: Inet6Address): boolean;
    static isCompatIPv4Address(paramip: Inet6Address): boolean;
    static isInetAddress(paramipString: string): boolean;
    static isIsatapAddress(paramip: Inet6Address): boolean;
    static isMappedIPv4Address(paramipString: string): boolean;
    static isMaximum(paramaddress: InetAddress): boolean;
    static isTeredoAddress(paramip: Inet6Address): boolean;
    static isUriInetAddress(paramipString: string): boolean;
    static toAddrString(paramip: InetAddress): string;
    static toBigInteger(paramaddress: InetAddress): BigInteger;
    static toUriString(paramip: InetAddress): string;
    private constructor()
}