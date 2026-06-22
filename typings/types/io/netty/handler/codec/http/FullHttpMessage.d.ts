import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DecoderResult } from '../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { LastHttpContent } from '../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FullHttpMessage extends HttpMessage, LastHttpContent, Object{
    content(): ByteBuf;
    copy(): FullHttpMessage;
    decoderResult(): DecoderResult;
    duplicate(): FullHttpMessage;
    getDecoderResult(): DecoderResult;
    getProtocolVersion(): HttpVersion;
    protocolVersion(): HttpVersion;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): FullHttpMessage;
    retain(): FullHttpMessage;
    retain(arg0: number): FullHttpMessage;
    retainedDuplicate(): FullHttpMessage;
    setDecoderResult(arg0: DecoderResult): void;
    setProtocolVersion(arg0: HttpVersion): HttpMessage;
    touch(): FullHttpMessage;
    touch(arg0: Object): FullHttpMessage;
}