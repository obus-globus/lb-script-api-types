import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { ProtocolInfo } from '../../../../net/minecraft/network/ProtocolInfo.d.ts'
import type { ProtocolInfo$Details } from '../../../../net/minecraft/network/ProtocolInfo$Details.d.ts'
import type { ProtocolInfo$DetailsProvider } from '../../../../net/minecraft/network/ProtocolInfo$DetailsProvider.d.ts'
export interface UnboundProtocol<T extends PacketListener, B extends ByteBuf, C extends unknown> extends Object, ProtocolInfo$DetailsProvider {
    bind(contextWrapper: (param0: ByteBuf) => B, context: C): ProtocolInfo<T>;
    details(): ProtocolInfo$Details;
}