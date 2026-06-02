import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RakPong } from '../../../../../org/cloudburstmc/netty/channel/raknet/RakPong.d.ts'
export class RakPing extends Object {
    constructor(arg0: number, arg1: InetSocketAddress)
    readonly pingTime: number;
    readonly sender: InetSocketAddress;
    getPingTime(): number;
    getSender(): InetSocketAddress;
    reply(arg0: number, arg1: ByteBuf): RakPong;
}