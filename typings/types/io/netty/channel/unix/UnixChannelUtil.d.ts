import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnixChannelUtil extends Object {
    static computeRemoteAddr(paramarg0: InetSocketAddress, paramarg1: InetSocketAddress): InetSocketAddress;
    static isBufferCopyNeededForWrite(paramarg0: ByteBuf): boolean;
    private constructor()
}