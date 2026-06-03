import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { AbstractSniHandler } from '../../../../io/netty/handler/ssl/AbstractSniHandler.d.ts'
import type { SniHandler$Selection } from '../../../../io/netty/handler/ssl/SniHandler$Selection.d.ts'
import type { SslContext } from '../../../../io/netty/handler/ssl/SslContext.d.ts'
import type { SslHandler } from '../../../../io/netty/handler/ssl/SslHandler.d.ts'
import type { AsyncMapping } from '../../../../io/netty/util/AsyncMapping.d.ts'
import type { DomainNameMapping } from '../../../../io/netty/util/DomainNameMapping.d.ts'
import type { Mapping } from '../../../../io/netty/util/Mapping.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
export class SniHandler extends AbstractSniHandler<SslContext> {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MAX_CLIENT_HELLO_LENGTH: number;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: AsyncMapping<string, SslContext>)
    constructor(arg0: AsyncMapping<string, SslContext>, arg1: number, arg2: number)
    constructor(arg0: AsyncMapping<string, SslContext>, arg1: number)
    constructor(arg0: DomainNameMapping<SslContext>)
    constructor(arg0: Mapping<string, SslContext>)
    constructor(arg0: Mapping<string, SslContext>, arg1: number, arg2: number)
    constructor(arg0: Mapping<string, SslContext>, arg1: number)
    // private mapping: AsyncMapping<string, SslContext>;
    // private selection: SniHandler$Selection;
    hostname(): string;
    lookup(arg0: ChannelHandlerContext, arg1: ByteBuf): Future<SslContext>;
    lookup(arg0: ChannelHandlerContext, arg1: string): Future<SslContext>;
    newSslHandler(arg0: SslContext, arg1: ByteBufAllocator): SslHandler;
    onLookupComplete(arg0: ChannelHandlerContext, arg1: Future<SslContext>): void;
    onLookupComplete(arg0: ChannelHandlerContext, arg1: string, arg2: Future<SslContext>): void;
    replaceHandler(arg0: ChannelHandlerContext, arg1: string, arg2: SslContext): void;
    sslContext(): SslContext;
}