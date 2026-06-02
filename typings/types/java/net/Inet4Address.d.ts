import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Inet4Address extends InetAddress {
    static getAllByName(paramarg0: string): (Object | null)[];
    static getByAddress(paramarg0: number[]): InetAddress;
    static getByAddress(paramarg0: string, paramarg1: number[]): InetAddress;
    static getByName(paramarg0: string): InetAddress;
    static getLocalHost(): InetAddress;
    static getLoopbackAddress(): InetAddress;
    static ofLiteral(paramarg0: string): Inet4Address;
    static ofLiteral(paramarg0: string): InetAddress;
    static ofPosixLiteral(paramarg0: string): Inet4Address;
    constructor()
    constructor(arg0: string, arg1: number[])
    constructor(arg0: string, arg1: number)
    addressValue(): number;
    equals(arg0: Object | null): boolean;
    getAddress(): number[];
    getHostAddress(): string;
    hashCode(): number;
    isAnyLocalAddress(): boolean;
    isLinkLocalAddress(): boolean;
    isLoopbackAddress(): boolean;
    isMCGlobal(): boolean;
    isMCLinkLocal(): boolean;
    isMCNodeLocal(): boolean;
    isMCOrgLocal(): boolean;
    isMCSiteLocal(): boolean;
    isMulticastAddress(): boolean;
    isSiteLocalAddress(): boolean;
    // private writeReplace(): Object;
}