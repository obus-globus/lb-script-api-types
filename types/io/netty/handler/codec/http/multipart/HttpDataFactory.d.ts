import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Attribute } from '../../../../../../io/netty/handler/codec/http/multipart/Attribute.d.ts'
import type { FileUpload } from '../../../../../../io/netty/handler/codec/http/multipart/FileUpload.d.ts'
import type { InterfaceHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface HttpDataFactory extends Object{
    cleanAllHttpData(): void;
    cleanAllHttpDatas(): void;
    cleanRequestHttpData(arg0: HttpRequest): void;
    cleanRequestHttpDatas(arg0: HttpRequest): void;
    createAttribute(arg0: HttpRequest, arg1: string): Attribute;
    createAttribute(arg0: HttpRequest, arg1: string, arg2: number): Attribute;
    createAttribute(arg0: HttpRequest, arg1: string, arg2: string): Attribute;
    createFileUpload(arg0: HttpRequest, arg1: string, arg2: string, arg3: string, arg4: string, arg5: Charset, arg6: number): FileUpload;
    removeHttpDataFromClean(arg0: HttpRequest, arg1: InterfaceHttpData): void;
    setMaxLimit(arg0: number): void;
}