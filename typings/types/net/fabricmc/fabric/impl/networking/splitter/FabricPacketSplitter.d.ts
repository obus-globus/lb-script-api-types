import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageEncoder } from '../../../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PayloadTypeRegistryImpl } from '../../../../../../net/fabricmc/fabric/impl/networking/PayloadTypeRegistryImpl.d.ts'
import type { PacketEncoder } from '../../../../../../net/minecraft/network/PacketEncoder.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class FabricPacketSplitter extends MessageToMessageEncoder<Packet<Object>> {
    static SAFE_C2S_SPLIT_SIZE: number;
    static SAFE_S2C_SPLIT_SIZE: number;
    static genericPacketSplitter(paramarg0: Identifier, paramarg1: ChannelHandlerContext, paramarg2: PacketEncoder<Object>, paramarg3: Packet<Object>, paramarg4: (param0: CustomPacketPayload) => Object | null, paramarg5: (param0: Object | null) => void, paramarg6: number, paramarg7: number): void;
    constructor(arg0: PacketEncoder<Object>, arg1: PayloadTypeRegistryImpl<Object>)
    // private encoder: PacketEncoder<Object>;
    // private payloadTypeRegistry: PayloadTypeRegistryImpl<Object>;
    encode(arg0: ChannelHandlerContext, arg1: Packet<Object>, arg2: Object[]): void;
}