import type { URI } from '../../../java/net/URI.d.ts'
import type { HttpClient$Version } from '../../../java/net/http/HttpClient$Version.d.ts'
import type { HttpHeaders } from '../../../java/net/http/HttpHeaders.d.ts'
import type { HttpRequest } from '../../../java/net/http/HttpRequest.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { SSLSession } from '../../../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HttpResponse<T extends unknown> extends Object{
    body(): T;
    connectionLabel(): Optional<string>;
    headers(): HttpHeaders;
    previousResponse(): Optional<HttpResponse<T>>;
    request(): HttpRequest;
    sslSession(): Optional<SSLSession>;
    statusCode(): number;
    uri(): URI;
    version(): HttpClient$Version;
}