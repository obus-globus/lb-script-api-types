import type { HttpContent } from '../../../../../../io/netty/handler/codec/http/HttpContent.d.ts'
import type { InterfaceHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface InterfaceHttpPostRequestDecoder extends Object{
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