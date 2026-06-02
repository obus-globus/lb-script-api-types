import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Attribute } from '../../../../../../io/netty/handler/codec/http/multipart/Attribute.d.ts'
import type { FileUpload } from '../../../../../../io/netty/handler/codec/http/multipart/FileUpload.d.ts'
import type { HttpData } from '../../../../../../io/netty/handler/codec/http/multipart/HttpData.d.ts'
import type { HttpDataFactory } from '../../../../../../io/netty/handler/codec/http/multipart/HttpDataFactory.d.ts'
import type { InterfaceHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DefaultHttpDataFactory extends Object implements HttpDataFactory {
    static MAXSIZE: number;
    static MINSIZE: number;
    constructor()
    constructor(arg0: Charset)
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: Charset)
    constructor(arg0: number)
    constructor(arg0: number, arg1: Charset)
    readonly baseDir: string;
    // private charset: Charset;
    // private checkSize: boolean;
    readonly deleteOnExit: boolean;
    // private maxSize: number;
    // private minSize: number;
    // private requestFileDeleteMap: Map<HttpRequest, HttpData[]>;
    // private useDisk: boolean;
    cleanAllHttpData(): void;
    cleanAllHttpDatas(): void;
    cleanRequestHttpData(arg0: HttpRequest): void;
    cleanRequestHttpDatas(arg0: HttpRequest): void;
    createAttribute(arg0: HttpRequest, arg1: string): Attribute;
    createAttribute(arg0: HttpRequest, arg1: string, arg2: number): Attribute;
    createAttribute(arg0: HttpRequest, arg1: string, arg2: string): Attribute;
    createFileUpload(arg0: HttpRequest, arg1: string, arg2: string, arg3: string, arg4: string, arg5: Charset, arg6: number): FileUpload;
    // private getList(arg0: HttpRequest): HttpData[];
    removeHttpDataFromClean(arg0: HttpRequest, arg1: InterfaceHttpData): void;
    setBaseDir(arg0: string): void;
    setDeleteOnExit(arg0: boolean): void;
    setMaxLimit(arg0: number): void;
}