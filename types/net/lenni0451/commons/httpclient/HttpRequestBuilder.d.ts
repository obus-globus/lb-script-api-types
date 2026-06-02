import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HttpContentRequest } from '../../../../net/lenni0451/commons/httpclient/requests/HttpContentRequest.d.ts'
import type { HttpRequest } from '../../../../net/lenni0451/commons/httpclient/requests/HttpRequest.d.ts'
import type { DeleteRequest } from '../../../../net/lenni0451/commons/httpclient/requests/impl/DeleteRequest.d.ts'
import type { GetRequest } from '../../../../net/lenni0451/commons/httpclient/requests/impl/GetRequest.d.ts'
import type { HeadRequest } from '../../../../net/lenni0451/commons/httpclient/requests/impl/HeadRequest.d.ts'
import type { PostRequest } from '../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
import type { PutRequest } from '../../../../net/lenni0451/commons/httpclient/requests/impl/PutRequest.d.ts'
export interface HttpRequestBuilder extends Object{
    bind<T extends HttpRequest>(arg0: T): T;
    contentRequest(arg0: string, arg1: URL): HttpContentRequest;
    contentRequest(arg0: string, arg1: string): HttpContentRequest;
    delete(arg0: URL): DeleteRequest;
    delete(arg0: string): DeleteRequest;
    get(arg0: URL): GetRequest;
    get(arg0: string): GetRequest;
    head(arg0: URL): HeadRequest;
    head(arg0: string): HeadRequest;
    post(arg0: URL): PostRequest;
    post(arg0: string): PostRequest;
    put(arg0: URL): PutRequest;
    put(arg0: string): PutRequest;
    request(arg0: string, arg1: URL): HttpRequest;
    request(arg0: string, arg1: string): HttpRequest;
}