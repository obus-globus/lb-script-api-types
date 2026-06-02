import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { Protocol } from '../../../okhttp3/Protocol.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response$Builder } from '../../../okhttp3/Response$Builder.d.ts'
import type { Header } from '../../../okhttp3/internal/http2/Header.d.ts'
export class Http2ExchangeCodec$Companion extends Object {
    // private CONNECTION: string;
    // private ENCODING: string;
    // private HOST: string;
    // private HTTP_2_SKIPPED_REQUEST_HEADERS: string[];
    // private HTTP_2_SKIPPED_RESPONSE_HEADERS: string[];
    // private KEEP_ALIVE: string;
    // private PROXY_CONNECTION: string;
    // private TE: string;
    // private TRANSFER_ENCODING: string;
    // private UPGRADE: string;
    http2HeadersList(request: Request): Header[];
    readHttp2HeadersList(headerBlock: Pair<string, string>[], protocol: Protocol): Response$Builder;
}