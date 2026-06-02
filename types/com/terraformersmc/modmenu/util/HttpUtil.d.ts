import type { HttpRequest$Builder } from '../../../../java/net/http/HttpRequest$Builder.d.ts'
import type { HttpResponse } from '../../../../java/net/http/HttpResponse.d.ts'
import type { HttpResponse$BodyHandler } from '../../../../java/net/http/HttpResponse$BodyHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpUtil extends Object {
    static request(paramarg0: HttpRequest$Builder, paramarg1: (param0: Object | null) => java.net.http.HttpResponse.BodySubscriber<unknown>): HttpResponse<Object>;
    private constructor()
}