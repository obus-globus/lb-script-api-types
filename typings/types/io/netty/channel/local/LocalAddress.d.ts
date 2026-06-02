import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class LocalAddress extends SocketAddress implements Comparable<LocalAddress> {
    static ANY: LocalAddress;
    constructor(arg0: Channel)
    constructor(arg0: Class<Object>)
    constructor(arg0: string)
    // private id: string;
    // private strVal: string;
    compareTo(arg0: LocalAddress): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    id(): string;
    toString(): string;
}