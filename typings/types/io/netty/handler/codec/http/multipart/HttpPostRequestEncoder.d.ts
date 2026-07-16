import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { HttpContent } from '../../../../../../io/netty/handler/codec/http/HttpContent.d.ts'
import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { FileUpload } from '../../../../../../io/netty/handler/codec/http/multipart/FileUpload.d.ts'
import type { HttpDataFactory } from '../../../../../../io/netty/handler/codec/http/multipart/HttpDataFactory.d.ts'
import type { HttpPostRequestEncoder$EncoderMode } from '../../../../../../io/netty/handler/codec/http/multipart/HttpPostRequestEncoder$EncoderMode.d.ts'
import type { InterfaceHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData.d.ts'
import type { ChunkedInput } from '../../../../../../io/netty/handler/stream/ChunkedInput.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../../../java/util/ListIterator.d.ts'
export class HttpPostRequestEncoder extends Object implements ChunkedInput<HttpContent> {
    constructor(arg0: HttpRequest, arg1: boolean)
    constructor(arg0: HttpDataFactory, arg1: HttpRequest, arg2: boolean)
    constructor(arg0: HttpDataFactory, arg1: HttpRequest, arg2: boolean, arg3: Charset, arg4: HttpPostRequestEncoder$EncoderMode)
    // private bodyListDatas: InterfaceHttpData[];
    // private charset: Charset;
    // private currentBuffer: ByteBuf;
    // private currentData: InterfaceHttpData;
    // private currentFileUpload: FileUpload;
    // private duringMixedMode: boolean;
    // private encoderMode: HttpPostRequestEncoder$EncoderMode;
    // private factory: HttpDataFactory;
    // private globalBodySize: number;
    // private globalProgress: number;
    // private headerFinalized: boolean;
    // private isChunked: boolean;
    // private isKey: boolean;
    // private isLastChunk: boolean;
    // private isLastChunkSent: boolean;
    // private isMultipart: boolean;
    // private iterator: ListIterator<InterfaceHttpData>;
    // private multipartDataBoundary: string;
    // private multipartHttpDatas: InterfaceHttpData[];
    // private multipartMixedBoundary: string;
    // private request: HttpRequest;
    addBodyAttribute(arg0: string, arg1: string): void;
    addBodyFileUpload(arg0: string, arg1: File, arg2: string, arg3: boolean): void;
    addBodyFileUpload(arg0: string, arg1: string, arg2: File, arg3: string, arg4: boolean): void;
    addBodyFileUploads(arg0: string, arg1: File[], arg2: string[], arg3: boolean[]): void;
    addBodyHttpData(arg0: InterfaceHttpData): void;
    // private calculateRemainingSize(): number;
    cleanFiles(): void;
    close(): void;
    // private encodeAttribute(arg0: string, arg1: Charset): string;
    // private encodeNextChunkMultipart(arg0: number): HttpContent;
    // private encodeNextChunkUrlEncoded(arg0: number): HttpContent;
    // private fillByteBuf(): ByteBuf;
    finalizeRequest(): HttpRequest;
    getBodyListAttributes(): InterfaceHttpData[];
    // private initDataMultipart(): void;
    // private initMixedMultipart(): void;
    isChunked(): boolean;
    isEndOfInput(): boolean;
    isMultipart(): boolean;
    // private lastChunk(): HttpContent;
    length(): number;
    // private nextChunk(): HttpContent;
    progress(): number;
    readChunk(arg0: ByteBufAllocator): HttpContent;
    readChunk(arg0: ChannelHandlerContext): HttpContent;
    setBodyHttpDatas(arg0: InterfaceHttpData[]): void;
}