import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { JsonHttpResponseHandler } from '../../../../../net/raphimc/minecraftauth/util/http/responsehandler/JsonHttpResponseHandler.d.ts'
export interface XblResponseHandler<R extends Object | number | string | boolean> extends Object, JsonHttpResponseHandler<R>{
    handle(arg0: HttpResponse): R;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}