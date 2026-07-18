import type { DefaultHttp2LocalFlowController } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2LocalFlowController.d.ts'
import type { Http2Exception$StreamException } from '../../../../../io/netty/handler/codec/http2/Http2Exception$StreamException.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Http2StreamVisitor } from '../../../../../io/netty/handler/codec/http2/Http2StreamVisitor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2LocalFlowController$WindowUpdateVisitor extends Object implements Http2StreamVisitor {
    constructor(null_: DefaultHttp2LocalFlowController, arg1: number)
    // private compositeException: Http2Exception$StreamException[];
    // private delta: number;
    throwIfError(): void;
    visit(arg0: Http2Stream): boolean;
}