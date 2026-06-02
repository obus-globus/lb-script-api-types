import type { Proxy$Type } from '../../java/net/Proxy$Type.d.ts'
import type { SocketAddress } from '../../java/net/SocketAddress.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Proxy extends Object {
    static NO_PROXY: Proxy;
    private constructor()
    constructor(arg0: Proxy$Type, arg1: SocketAddress)
    // private sa: SocketAddress;
    // private type: Proxy$Type;
    address(): SocketAddress;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): Proxy$Type;
}