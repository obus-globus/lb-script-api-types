import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DecoderResult } from '../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { FullHttpMessage } from '../../../../../io/netty/handler/codec/http/FullHttpMessage.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { LastHttpContent } from '../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export abstract class HttpObjectAggregator$AggregatedFullHttpMessage extends Object implements FullHttpMessage {
    static EMPTY_LAST_CONTENT: LastHttpContent;
    constructor(arg0: HttpMessage, arg1: ByteBuf, arg2: Map$Entry<string, string>[])
    // private content: ByteBuf;
    // private message: HttpMessage;
    // private trailingHeaders: Map$Entry<string, string>[];
    content(): ByteBuf;
    copy(): FullHttpMessage;
    decoderResult(): DecoderResult;
    duplicate(): FullHttpMessage;
    getDecoderResult(): DecoderResult;
    getProtocolVersion(): HttpVersion;
    headers(): Map$Entry<string, string>[];
    protocolVersion(): HttpVersion;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    retain(): FullHttpMessage;
    retain(arg0: number): FullHttpMessage;
    retainedDuplicate(): FullHttpMessage;
    setDecoderResult(arg0: DecoderResult): void;
    setProtocolVersion(arg0: HttpVersion): FullHttpMessage;
    setTrailingHeaders(arg0: Map$Entry<string, string>[]): void;
    touch(): FullHttpMessage;
    touch(arg0: Object): FullHttpMessage;
    trailingHeaders(): Map$Entry<string, string>[];
}