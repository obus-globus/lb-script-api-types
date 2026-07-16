import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PacketListener } from '../../../net/minecraft/network/PacketListener.d.ts'
import type { ProtocolInfo } from '../../../net/minecraft/network/ProtocolInfo.d.ts'
import type { UnconfiguredPipelineHandler$InboundConfigurationTask } from '../../../net/minecraft/network/UnconfiguredPipelineHandler$InboundConfigurationTask.d.ts'
import type { UnconfiguredPipelineHandler$OutboundConfigurationTask } from '../../../net/minecraft/network/UnconfiguredPipelineHandler$OutboundConfigurationTask.d.ts'
export class UnconfiguredPipelineHandler extends Object {
    static setupInboundProtocol<T extends PacketListener>(paramprotocolInfo: ProtocolInfo<T>): (param0: ChannelHandlerContext) => void;
    static setupOutboundProtocol<T extends PacketListener>(paramcodecData: ProtocolInfo<T>): (param0: ChannelHandlerContext) => void;
    constructor()
}