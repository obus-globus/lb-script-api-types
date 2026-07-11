import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpContent } from '../../../../../../io/netty/handler/codec/http/HttpContent.d.ts'
import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Attribute } from '../../../../../../io/netty/handler/codec/http/multipart/Attribute.d.ts'
import type { FileUpload } from '../../../../../../io/netty/handler/codec/http/multipart/FileUpload.d.ts'
import type { HttpDataFactory } from '../../../../../../io/netty/handler/codec/http/multipart/HttpDataFactory.d.ts'
import type { HttpPostRequestDecoder$MultiPartStatus } from '../../../../../../io/netty/handler/codec/http/multipart/HttpPostRequestDecoder$MultiPartStatus.d.ts'
import type { InterfaceHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData.d.ts'
import type { InterfaceHttpPostRequestDecoder } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpPostRequestDecoder.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
export class HttpPostMultipartRequestDecoder extends Object implements InterfaceHttpPostRequestDecoder {
    constructor(arg0: HttpRequest)
    constructor(arg0: HttpDataFactory, arg1: HttpRequest)
    constructor(arg0: HttpDataFactory, arg1: HttpRequest, arg2: Charset)
    constructor(arg0: HttpDataFactory, arg1: HttpRequest, arg2: Charset, arg3: number, arg4: number)
    // private bodyListHttpData: InterfaceHttpData[];
    // private bodyListHttpDataRank: number;
    // private bodyMapHttpData: { [key: string]: InterfaceHttpData[] };
    // private charset: Charset;
    // private currentAttribute: Attribute;
    // private currentFieldAttributes: Map<CharSequence, Attribute>;
    // private currentFileUpload: FileUpload;
    // private currentStatus: HttpPostRequestDecoder$MultiPartStatus;
    // private destroyed: boolean;
    readonly discardThreshold: number;
    // private factory: HttpDataFactory;
    // private isLastChunk: boolean;
    // private maxBufferedBytes: number;
    // private maxFields: number;
    // private multipartDataBoundary: string;
    // private multipartMixedBoundary: string;
    // private request: HttpRequest;
    // private undecodedChunk: ByteBuf;
    addHttpData(arg0: InterfaceHttpData): void;
    // private checkDestroyed(): void;
    cleanFiles(): void;
    // private cleanMixedAttributes(): void;
    currentPartialHttpData(): InterfaceHttpData;
    // private decodeMultipart(arg0: HttpPostRequestDecoder$MultiPartStatus): InterfaceHttpData;
    destroy(): void;
    // private findMultipartDelimiter(arg0: string, arg1: HttpPostRequestDecoder$MultiPartStatus, arg2: HttpPostRequestDecoder$MultiPartStatus): InterfaceHttpData;
    // private findMultipartDisposition(): InterfaceHttpData;
    getBodyHttpData(arg0: string): InterfaceHttpData;
    getBodyHttpDatas(): InterfaceHttpData[];
    getBodyHttpDatas(arg0: string): InterfaceHttpData[];
    // private getContentDispositionAttribute(...arg0: string[]): Attribute;
    getCurrentAllocatedCapacity(): number;
    getDiscardThreshold(): number;
    getFileUpload(arg0: string): InterfaceHttpData;
    hasNext(): boolean;
    isMultipart(): boolean;
    next(): InterfaceHttpData;
    offer(arg0: HttpContent): HttpPostMultipartRequestDecoder;
    // private parseBody(): void;
    // private parseBodyMultipart(): void;
    removeHttpDataFromClean(arg0: InterfaceHttpData): void;
    setDiscardThreshold(arg0: number): void;
    // private skipOneLine(): boolean;
}