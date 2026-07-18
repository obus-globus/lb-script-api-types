import type { HttpResponseStatus } from '../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NettyApplicationResponse$Companion extends Object {
    // private EmptyByteArray: number[];
    readonly responseStatusCache: (HttpResponseStatus | null)[];
}