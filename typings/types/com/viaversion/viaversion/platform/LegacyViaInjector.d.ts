import type { ViaInjector } from '../../../../com/viaversion/viaversion/api/platform/ViaInjector.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { JsonObject } from '../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { WrappedChannelInitializer } from '../../../../com/viaversion/viaversion/platform/WrappedChannelInitializer.d.ts'
import type { Pair } from '../../../../com/viaversion/viaversion/util/Pair.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandler } from '../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelInitializer } from '../../../../io/netty/channel/ChannelInitializer.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class LegacyViaInjector extends Object implements ViaInjector {
    constructor()
    // private injectedFutures: ChannelFuture[];
    // private injectedLists: Pair<Field, Object>[];
    blame(arg0: ChannelHandler): void;
    createChannelInitializer(arg0: ChannelInitializer<Channel>): WrappedChannelInitializer;
    getDecoderName(): string;
    getDump(): JsonObject;
    getEncoderName(): string;
    getServerConnection(): Object;
    getServerProtocolVersions(): ProtocolVersion[];
    inject(): void;
    // private injectChannelFuture(arg0: ChannelFuture): void;
    lateProtocolVersionSetting(): boolean;
    uninject(): void;
}