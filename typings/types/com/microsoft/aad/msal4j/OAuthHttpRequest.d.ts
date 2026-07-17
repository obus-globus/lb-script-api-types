import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { HttpMethod } from '../../../../com/microsoft/aad/msal4j/HttpMethod.d.ts'
import type { HttpResponse } from '../../../../com/microsoft/aad/msal4j/HttpResponse.d.ts'
import type { IHttpResponse } from '../../../../com/microsoft/aad/msal4j/IHttpResponse.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { ServiceBundle } from '../../../../com/microsoft/aad/msal4j/ServiceBundle.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OAuthHttpRequest extends Object {
    constructor(arg0: HttpMethod, arg1: URL, arg2: JavaMap<string, string>, arg3: RequestContext, arg4: ServiceBundle)
    // private extraHeaderParams: JavaMap<string, string>;
    // private method: HttpMethod;
    // private query: string;
    // private requestContext: RequestContext;
    // private serviceBundle: ServiceBundle;
    // private url: URL;
    // private configureHttpHeaders(): JavaMap<string, string>;
    // private createOauthHttpResponseFromHttpResponse(arg0: IHttpResponse): HttpResponse;
    getExtraHeaderParams(): JavaMap<string, string>;
    send(): HttpResponse;
    setQuery(arg0: string): void;
}