import type { AbstractBootstrapConfig } from '../../../io/netty/bootstrap/AbstractBootstrapConfig.d.ts'
import type { ServerBootstrap } from '../../../io/netty/bootstrap/ServerBootstrap.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelOption } from '../../../io/netty/channel/ChannelOption.d.ts'
import type { ServerChannel } from '../../../io/netty/channel/ServerChannel.d.ts'
import type { AttributeKey } from '../../../io/netty/util/AttributeKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ServerBootstrapConfig extends AbstractBootstrapConfig<ServerBootstrap, ServerChannel> {
    constructor(arg0: ServerBootstrap)
    childAttrs(): Map<AttributeKey<Object>, Object>;
    childGroup(): (Object | null)[];
    childHandler(): ChannelHandler;
    childOptions(): Map<ChannelOption<Object>, Object>;
    toString(): string;
}