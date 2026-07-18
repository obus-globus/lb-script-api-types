import type { Http2Error } from '../../../../../io/netty/handler/codec/http2/Http2Error.d.ts'
import type { Http2Exception$ShutdownHint } from '../../../../../io/netty/handler/codec/http2/Http2Exception$ShutdownHint.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class Http2Exception extends Exception {
    static closedStreamError(paramarg0: Http2Error, paramarg1: string, ...paramarg2: Object[]): Http2Exception;
    static connectionError(paramarg0: Http2Error, paramarg1: string, ...paramarg2: Object[]): Http2Exception;
    static connectionError(paramarg0: Http2Error, paramarg1: Throwable, paramarg2: string, ...paramarg3: Object[]): Http2Exception;
    static headerListSizeError(paramarg0: number, paramarg1: Http2Error, paramarg2: boolean, paramarg3: string, ...paramarg4: Object[]): Http2Exception;
    static isStreamError(paramarg0: Http2Exception): boolean;
    static streamError(paramarg0: number, paramarg1: Http2Error, paramarg2: string, ...paramarg3: Object[]): Http2Exception;
    static streamError(paramarg0: number, paramarg1: Http2Error, paramarg2: Throwable, paramarg3: string, ...paramarg4: Object[]): Http2Exception;
    static streamId(paramarg0: Http2Exception): number;
    constructor(arg0: Http2Error)
    constructor(arg0: Http2Error, arg1: Http2Exception$ShutdownHint)
    constructor(arg0: Http2Error, arg1: string)
    constructor(arg0: Http2Error, arg1: string, arg2: Http2Exception$ShutdownHint)
    constructor(arg0: Http2Error, arg1: string, arg2: Throwable)
    constructor(arg0: Http2Error, arg1: string, arg2: Throwable, arg3: Http2Exception$ShutdownHint)
    // private error: Http2Error;
    // private shutdownHint: Http2Exception$ShutdownHint;
    error(): Http2Error;
    shutdownHint(): Http2Exception$ShutdownHint;
}