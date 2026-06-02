import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ProtocolInfo } from '../../../net/minecraft/network/ProtocolInfo.d.ts'
import type { UnconfiguredPipelineHandler$InboundConfigurationTask } from '../../../net/minecraft/network/UnconfiguredPipelineHandler$InboundConfigurationTask.d.ts'
import type { UnconfiguredPipelineHandler$OutboundConfigurationTask } from '../../../net/minecraft/network/UnconfiguredPipelineHandler$OutboundConfigurationTask.d.ts'
export class UnconfiguredPipelineHandler extends Object {
    static setupInboundProtocol(paramprotocolInfo: ProtocolInfo<Object>): (param0: ChannelHandlerContext) => void;
    static setupOutboundProtocol(paramcodecData: ProtocolInfo<Object>): (param0: ChannelHandlerContext) => void;
    constructor()
}