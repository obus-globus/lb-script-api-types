import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { TooLongFrameException } from '../../../../../io/netty/handler/codec/TooLongFrameException.d.ts'
import type { HttpObjectDecoder$HeaderParser } from '../../../../../io/netty/handler/codec/http/HttpObjectDecoder$HeaderParser.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
export class HttpObjectDecoder$LineParser extends HttpObjectDecoder$HeaderParser {
    constructor(null_: HttpObjectDecoder$LineParser, arg1: ByteBuf, arg2: number)
    newException(arg0: number): TooLongFrameException;
    parse(arg0: ByteBuf, arg1: () => void): ByteBuf;
    // private skipControlChars(arg0: ByteBuf, arg1: number, arg2: number): boolean;
}