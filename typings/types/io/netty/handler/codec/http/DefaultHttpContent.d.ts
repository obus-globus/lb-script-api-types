import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DefaultHttpObject } from '../../../../../io/netty/handler/codec/http/DefaultHttpObject.d.ts'
import type { HttpContent } from '../../../../../io/netty/handler/codec/http/HttpContent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttpContent extends DefaultHttpObject implements HttpContent {
    constructor(arg0: ByteBuf)
    // private content: ByteBuf;
    content(): ByteBuf;
    copy(): HttpContent;
    duplicate(): HttpContent;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): HttpContent;
    retain(): HttpContent;
    retain(arg0: number): HttpContent;
    retainedDuplicate(): HttpContent;
    toString(): string;
    touch(): HttpContent;
    touch(arg0: Object): HttpContent;
}