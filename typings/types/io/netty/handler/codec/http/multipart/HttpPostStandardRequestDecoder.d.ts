import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpContent } from '../../../../../../io/netty/handler/codec/http/HttpContent.d.ts'
import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Attribute } from '../../../../../../io/netty/handler/codec/http/multipart/Attribute.d.ts'
import type { HttpDataFactory } from '../../../../../../io/netty/handler/codec/http/multipart/HttpDataFactory.d.ts'
import type { HttpPostRequestDecoder$MultiPartStatus } from '../../../../../../io/netty/handler/codec/http/multipart/HttpPostRequestDecoder$MultiPartStatus.d.ts'
import type { InterfaceHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData.d.ts'
import type { InterfaceHttpPostRequestDecoder } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpPostRequestDecoder.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HttpPostStandardRequestDecoder extends Object implements InterfaceHttpPostRequestDecoder {
    constructor(arg0: HttpRequest)
    constructor(arg0: HttpDataFactory, arg1: HttpRequest)
    constructor(arg0: HttpDataFactory, arg1: HttpRequest, arg2: Charset)
    constructor(arg0: HttpDataFactory, arg1: HttpRequest, arg2: Charset, arg3: number, arg4: number)
    // private bodyListHttpData: InterfaceHttpData[];
    // private bodyListHttpDataRank: number;
    // private bodyMapHttpData: JavaMap<string, InterfaceHttpData[]>;
    // private charset: Charset;
    // private currentAttribute: Attribute;
    // private currentStatus: HttpPostRequestDecoder$MultiPartStatus;
    // private destroyed: boolean;
    readonly discardThreshold: number;
    // private factory: HttpDataFactory;
    // private isLastChunk: boolean;
    // private maxBufferedBytes: number;
    // private maxFields: number;
    // private request: HttpRequest;
    // private undecodedChunk: ByteBuf;
    addHttpData(arg0: InterfaceHttpData): void;
    // private checkDestroyed(): void;
    cleanFiles(): void;
    currentPartialHttpData(): InterfaceHttpData;
    destroy(): void;
    getBodyHttpData(arg0: string): InterfaceHttpData;
    getBodyHttpDatas(): InterfaceHttpData[];
    getBodyHttpDatas(arg0: string): InterfaceHttpData[];
    getDiscardThreshold(): number;
    // private hasFormBody(): boolean;
    hasNext(): boolean;
    isMultipart(): boolean;
    next(): InterfaceHttpData;
    offer(arg0: HttpContent): HttpPostStandardRequestDecoder;
    // private parseBody(): void;
    // private parseBodyAttributes(): void;
    // private parseBodyAttributesStandard(): void;
    removeHttpDataFromClean(arg0: InterfaceHttpData): void;
    setDiscardThreshold(arg0: number): void;
    // private setFinalBuffer(arg0: ByteBuf): void;
}