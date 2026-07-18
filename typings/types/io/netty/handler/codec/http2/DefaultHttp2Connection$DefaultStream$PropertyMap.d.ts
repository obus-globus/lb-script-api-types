import type { DefaultHttp2Connection$DefaultPropertyKey } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$DefaultPropertyKey.d.ts'
import type { DefaultHttp2Connection$DefaultStream } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$DefaultStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2Connection$DefaultStream$PropertyMap extends Object {
    private constructor(null_: DefaultHttp2Connection$DefaultStream)
    // private values: Object[];
    add<V extends unknown>(arg0: DefaultHttp2Connection$DefaultPropertyKey, arg1: V): V;
    get<V extends unknown>(arg0: DefaultHttp2Connection$DefaultPropertyKey): V;
    remove<V extends unknown>(arg0: DefaultHttp2Connection$DefaultPropertyKey): V;
    resizeIfNecessary(arg0: number): void;
}