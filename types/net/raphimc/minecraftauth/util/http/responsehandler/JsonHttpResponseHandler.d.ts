import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { HttpResponseHandler } from '../../../../../../net/lenni0451/commons/httpclient/handler/HttpResponseHandler.d.ts'
export interface JsonHttpResponseHandler<R extends Object | number | string | boolean> extends Object, HttpResponseHandler<R>{
    handle(arg0: HttpResponse): R;
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): R;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}