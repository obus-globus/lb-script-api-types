import type { ObjectInputStream } from '../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../java/io/ObjectOutputStream.d.ts'
import type { InetAddress } from '../../java/net/InetAddress.d.ts'
import type { InetSocketAddress$InetSocketAddressHolder } from '../../java/net/InetSocketAddress$InetSocketAddressHolder.d.ts'
import type { SocketAddress } from '../../java/net/SocketAddress.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class InetSocketAddress extends SocketAddress {
    static createUnresolved(paramarg0: string, paramarg1: number): InetSocketAddress;
    constructor(arg0: InetAddress, arg1: number)
    constructor(arg0: number)
    constructor(arg0: string, arg1: number)
    // private holder: InetSocketAddress$InetSocketAddressHolder;
    equals(arg0: Object | null): boolean;
    getAddress(): InetAddress;
    getHostName(): string;
    getHostString(): string;
    getPort(): number;
    hashCode(): number;
    isUnresolved(): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    // private readObjectNoData(): void;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}