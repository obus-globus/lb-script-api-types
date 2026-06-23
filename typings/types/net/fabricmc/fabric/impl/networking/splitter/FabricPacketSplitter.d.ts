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
export class FabricPacketSplitter extends MessageToMessageEncoder<Packet<any>> {
    static SAFE_C2S_SPLIT_SIZE: number;
    static SAFE_S2C_SPLIT_SIZE: number;
    static genericPacketSplitter(paramarg0: Identifier, paramarg1: ChannelHandlerContext, paramarg2: PacketEncoder<any>, paramarg3: Packet<any>, paramarg4: (param0: CustomPacketPayload) => Packet<any>, paramarg5: (param0: Packet<any>) => void, paramarg6: number, paramarg7: number): void;
    constructor(arg0: PacketEncoder<any>, arg1: PayloadTypeRegistryImpl<any>)
    // private encoder: PacketEncoder<any>;
    // private payloadTypeRegistry: PayloadTypeRegistryImpl<any>;
    encode(arg0: ChannelHandlerContext, arg1: Packet<any>, arg2: Object[]): void;
}