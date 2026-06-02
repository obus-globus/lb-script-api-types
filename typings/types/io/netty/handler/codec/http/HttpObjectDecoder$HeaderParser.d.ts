import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { TooLongFrameException } from '../../../../../io/netty/handler/codec/TooLongFrameException.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpObjectDecoder$HeaderParser extends Object {
    constructor(arg0: ByteBuf, arg1: number)
    // private maxLength: number;
    // private seq: ByteBuf;
    // private size: number;
    newException(arg0: number): TooLongFrameException;
    parse(arg0: ByteBuf, arg1: () => void): ByteBuf;
    reset(): void;
}