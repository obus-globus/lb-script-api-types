import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RequestBody } from '../../../../../okhttp3/RequestBody.d.ts'
export class RequestBodyExtensionsKt extends Object {
    static makeRequestBody(self: Gson, data: Object | null): RequestBody;
    static toRequestBody(paramarg0: JsonElement): RequestBody;
    static toRequestBody(self: JsonElement, gson: Gson): RequestBody;
}