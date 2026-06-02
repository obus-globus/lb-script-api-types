import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpdyFrameDecoderDelegate extends Object{
    readDataFrame(arg0: number, arg1: boolean, arg2: ByteBuf): void;
    readFrameError(arg0: string): void;
    readGoAwayFrame(arg0: number, arg1: number): void;
    readHeaderBlock(arg0: ByteBuf): void;
    readHeaderBlockEnd(): void;
    readHeadersFrame(arg0: number, arg1: boolean): void;
    readPingFrame(arg0: number): void;
    readRstStreamFrame(arg0: number, arg1: number): void;
    readSetting(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
    readSettingsEnd(): void;
    readSettingsFrame(arg0: boolean): void;
    readSynReplyFrame(arg0: number, arg1: boolean): void;
    readSynStreamFrame(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean): void;
    readUnknownFrame(arg0: number, arg1: number, arg2: ByteBuf): void;
    readWindowUpdateFrame(arg0: number, arg1: number): void;
}