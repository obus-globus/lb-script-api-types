import type { HttpContent } from '../../../../../../io/netty/handler/codec/http/HttpContent.d.ts'
import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { HttpDataFactory } from '../../../../../../io/netty/handler/codec/http/multipart/HttpDataFactory.d.ts'
import type { InterfaceHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData.d.ts'
import type { InterfaceHttpPostRequestDecoder } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpPostRequestDecoder.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HttpPostRequestDecoder extends Object implements InterfaceHttpPostRequestDecoder {
    static isMultipart(paramarg0: HttpRequest): boolean;
    constructor(arg0: HttpRequest)
    constructor(arg0: HttpRequest, arg1: number, arg2: number)
    constructor(arg0: HttpDataFactory, arg1: HttpRequest)
    constructor(arg0: HttpDataFactory, arg1: HttpRequest, arg2: Charset)
    constructor(arg0: HttpDataFactory, arg1: HttpRequest, arg2: Charset, arg3: number, arg4: number)
    // private decoder: InterfaceHttpPostRequestDecoder;
    cleanFiles(): void;
    currentPartialHttpData(): InterfaceHttpData;
    destroy(): void;
    getBodyHttpData(arg0: string): InterfaceHttpData;
    getBodyHttpDatas(): InterfaceHttpData[];
    getBodyHttpDatas(arg0: string): InterfaceHttpData[];
    getDiscardThreshold(): number;
    hasNext(): boolean;
    isMultipart(): boolean;
    next(): InterfaceHttpData;
    offer(arg0: HttpContent): InterfaceHttpPostRequestDecoder;
    removeHttpDataFromClean(arg0: InterfaceHttpData): void;
    setDiscardThreshold(arg0: number): void;
}