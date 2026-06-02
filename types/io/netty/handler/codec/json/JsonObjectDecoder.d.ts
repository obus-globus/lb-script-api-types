import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JsonObjectDecoder extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    // private idx: number;
    // private insideString: boolean;
    // private lastReaderIndex: number;
    // private maxObjectLength: number;
    // private openBraces: number;
    // private state: number;
    // private streamArrayElements: boolean;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    // private decodeByte(arg0: number, arg1: ByteBuf, arg2: number): void;
    extractObject(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: number, arg3: number): ByteBuf;
    // private initDecoding(arg0: number): void;
    // private reset(): void;
}