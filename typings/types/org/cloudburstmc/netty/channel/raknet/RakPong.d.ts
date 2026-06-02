import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AbstractReferenceCounted } from '../../../../../io/netty/util/AbstractReferenceCounted.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RakPong extends AbstractReferenceCounted {
    constructor(arg0: number, arg1: number, arg2: ByteBuf, arg3: InetSocketAddress)
    readonly guid: number;
    readonly pingTime: number;
    readonly pongData: ByteBuf;
    readonly sender: InetSocketAddress;
    deallocate(): void;
    getGuid(): number;
    getPingTime(): number;
    getPongData(): ByteBuf;
    getSender(): InetSocketAddress;
    touch(arg0: Object): RakPong;
}