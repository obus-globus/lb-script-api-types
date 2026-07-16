import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Inet6Address$Inet6AddressHolder } from '../../java/net/Inet6Address$Inet6AddressHolder.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Inet6Address extends InetAddress {
    static getAllByName(paramarg0: string): InetAddress[];
    static getByAddress(paramarg0: string, paramarg1: number[], paramarg2: number): Inet6Address;
    static getByAddress(paramarg0: string, paramarg1: number[], paramarg2: NetworkInterface): Inet6Address;
    static getByAddress(paramarg0: number[]): InetAddress;
    static getByAddress(paramarg0: string, paramarg1: number[]): InetAddress;
    static getByName(paramarg0: string): InetAddress;
    static getLocalHost(): InetAddress;
    static getLoopbackAddress(): InetAddress;
    static ofLiteral(paramarg0: string): InetAddress;
    constructor()
    constructor(arg0: string, arg1: number[])
    constructor(arg0: string, arg1: number[], arg2: NetworkInterface)
    constructor(arg0: string, arg1: number[], arg2: number)
    constructor(arg0: string, arg1: number[], arg2: string)
    // private holder6: Inet6Address$Inet6AddressHolder;
    addressBytes(): number[];
    // private deriveNumericScope(arg0: string): number;
    equals(arg0: Object | null): boolean;
    getAddress(): number[];
    getHostAddress(): string;
    getScopeId(): number;
    getScopedInterface(): NetworkInterface;
    hashCode(): number;
    // private initif(arg0: string, arg1: number[], arg2: NetworkInterface): void;
    // private initstr(arg0: string, arg1: number[], arg2: string): void;
    isAnyLocalAddress(): boolean;
    isIPv4CompatibleAddress(): boolean;
    isLinkLocalAddress(): boolean;
    isLoopbackAddress(): boolean;
    isMCGlobal(): boolean;
    isMCLinkLocal(): boolean;
    isMCNodeLocal(): boolean;
    isMCOrgLocal(): boolean;
    isMCSiteLocal(): boolean;
    isMulticastAddress(): boolean;
    isSiteLocalAddress(): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}