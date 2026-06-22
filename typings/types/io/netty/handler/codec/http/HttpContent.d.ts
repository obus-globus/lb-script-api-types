import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { DecoderResult } from '../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { HttpObject } from '../../../../../io/netty/handler/codec/http/HttpObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HttpContent extends ByteBufHolder, HttpObject, Object{
    content(): ByteBuf;
    copy(): HttpContent;
    decoderResult(): DecoderResult;
    duplicate(): HttpContent;
    getDecoderResult(): DecoderResult;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): HttpContent;
    retain(): HttpContent;
    retain(arg0: number): HttpContent;
    retainedDuplicate(): HttpContent;
    setDecoderResult(arg0: DecoderResult): void;
    touch(): HttpContent;
    touch(arg0: Object): HttpContent;
}