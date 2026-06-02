import type { HttpObject } from '../../../../../io/netty/handler/codec/http/HttpObject.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface HttpMessage extends HttpObject, Object{
    getProtocolVersion(): HttpVersion;
    headers(): Map$Entry<string, string>[];
    protocolVersion(): HttpVersion;
    setProtocolVersion(arg0: HttpVersion): HttpMessage;
}