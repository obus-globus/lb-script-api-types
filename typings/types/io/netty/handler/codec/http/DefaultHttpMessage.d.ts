import type { DefaultHttpObject } from '../../../../../io/netty/handler/codec/http/DefaultHttpObject.d.ts'
import type { HttpHeadersFactory } from '../../../../../io/netty/handler/codec/http/HttpHeadersFactory.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export abstract class DefaultHttpMessage extends DefaultHttpObject implements HttpMessage {
    constructor(arg0: HttpVersion)
    constructor(arg0: HttpVersion, arg1: Map$Entry<string, string>[])
    constructor(arg0: HttpVersion, arg1: HttpHeadersFactory)
    constructor(arg0: HttpVersion, arg1: boolean, arg2: boolean)
    // private headers: Map$Entry<string, string>[];
    // private version: HttpVersion;
    equals(arg0: Object | null): boolean;
    getProtocolVersion(): HttpVersion;
    hashCode(): number;
    headers(): Map$Entry<string, string>[];
    protocolVersion(): HttpVersion;
    setProtocolVersion(arg0: HttpVersion): HttpMessage;
}