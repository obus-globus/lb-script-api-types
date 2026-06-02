import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { InterfaceAddress } from '../../java/net/InterfaceAddress.d.ts'
import type { Enumeration } from '../../java/util/Enumeration.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class NetworkInterface extends Object {
    static getByIndex(paramarg0: number): NetworkInterface;
    static getByInetAddress(paramarg0: InetAddress): NetworkInterface;
    static getByName(paramarg0: string): NetworkInterface;
    static getNetworkInterfaces(): Enumeration<NetworkInterface>;
    static networkInterfaces(): Stream<NetworkInterface>;
    constructor()
    constructor(arg0: string, arg1: number, arg2: InetAddress[])
    // private addrs: InetAddress[];
    // private bindings: InterfaceAddress[];
    // private childs: NetworkInterface[];
    readonly displayName: string;
    readonly index: number;
    readonly name: string;
    readonly parent: NetworkInterface;
    readonly virtual: boolean;
    equals(arg0: Object | null): boolean;
    getDisplayName(): string;
    getHardwareAddress(): number[];
    getIndex(): number;
    getInetAddresses(): Enumeration<InetAddress>;
    getInterfaceAddresses(): InterfaceAddress[];
    getMTU(): number;
    getName(): string;
    getParent(): NetworkInterface;
    getSubInterfaces(): Enumeration<NetworkInterface>;
    hashCode(): number;
    inetAddresses(): Stream<InetAddress>;
    isLoopback(): boolean;
    isPointToPoint(): boolean;
    isUp(): boolean;
    isVirtual(): boolean;
    subInterfaces(): Stream<NetworkInterface>;
    supportsMulticast(): boolean;
    toString(): string;
}