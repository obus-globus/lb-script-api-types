import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DecoderResult } from '../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { LastHttpContent } from '../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class ComposedLastHttpContent extends Object implements LastHttpContent {
    static EMPTY_LAST_CONTENT: LastHttpContent;
    constructor(arg0: Map$Entry<string, string>[])
    constructor(arg0: Map$Entry<string, string>[], arg1: DecoderResult)
    // private result: DecoderResult;
    // private trailingHeaders: Map$Entry<string, string>[];
    content(): ByteBuf;
    copy(): LastHttpContent;
    decoderResult(): DecoderResult;
    duplicate(): LastHttpContent;
    getDecoderResult(): DecoderResult;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): LastHttpContent;
    retain(): LastHttpContent;
    retain(arg0: number): LastHttpContent;
    retainedDuplicate(): LastHttpContent;
    setDecoderResult(arg0: DecoderResult): void;
    touch(): LastHttpContent;
    touch(arg0: Object): LastHttpContent;
    trailingHeaders(): Map$Entry<string, string>[];
}