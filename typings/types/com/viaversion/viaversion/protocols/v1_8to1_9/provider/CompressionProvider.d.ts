import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Provider } from '../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { CompressionProvider$CompressionHandler } from '../../../../../../com/viaversion/viaversion/protocols/v1_8to1_9/provider/CompressionProvider$CompressionHandler.d.ts'
import type { ChannelHandler } from '../../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class CompressionProvider extends Object implements Provider {
    constructor()
    getCompressName(): string;
    getDecoder(arg0: number): CompressionProvider$CompressionHandler;
    getDecompressName(): string;
    getEncoder(arg0: number): CompressionProvider$CompressionHandler;
    handlePlayCompression(arg0: UserConnection, arg1: number): void;
    // private removeHandlers(arg0: Map$Entry<string, ChannelHandler>[]): void;
}