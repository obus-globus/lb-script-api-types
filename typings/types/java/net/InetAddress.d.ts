import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { InetAddress$InetAddressHolder } from '../../java/net/InetAddress$InetAddressHolder.d.ts'
import type { NetworkInterface } from '../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class InetAddress extends Object implements Serializable {
    static getAllByName(paramarg0: string): InetAddress[];
    static getByAddress(paramarg0: number[]): InetAddress;
    static getByAddress(paramarg0: string, paramarg1: number[]): InetAddress;
    static getByName(paramarg0: string): InetAddress;
    static getLocalHost(): InetAddress;
    static getLoopbackAddress(): InetAddress;
    static ofLiteral(paramarg0: string): InetAddress;
    constructor()
    readonly canonicalHostName: string;
    // private holder: InetAddress$InetAddressHolder;
    equals(arg0: Object | null): boolean;
    getAddress(): number[];
    getCanonicalHostName(): string;
    getHostAddress(): string;
    getHostName(): string;
    hashCode(): number;
    holder(): InetAddress$InetAddressHolder;
    isAnyLocalAddress(): boolean;
    isLinkLocalAddress(): boolean;
    isLoopbackAddress(): boolean;
    isMCGlobal(): boolean;
    isMCLinkLocal(): boolean;
    isMCNodeLocal(): boolean;
    isMCOrgLocal(): boolean;
    isMCSiteLocal(): boolean;
    isMulticastAddress(): boolean;
    isReachable(arg0: NetworkInterface, arg1: number, arg2: number): boolean;
    isReachable(arg0: number): boolean;
    isSiteLocalAddress(): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    // private readResolve(): Object;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}