import type { HttpClient$Version } from '../../../java/net/http/HttpClient$Version.d.ts'
import type { HttpHeaders } from '../../../java/net/http/HttpHeaders.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface HttpResponse$ResponseInfo extends Object{
    headers(): HttpHeaders;
    statusCode(): number;
    version(): HttpClient$Version;
}