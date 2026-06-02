import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { RequestBody } from '../../../../../okhttp3/RequestBody.d.ts'
export class HttpUtilsKt extends Object {
    static makeRequestBody(paramarg0: Gson, paramarg1: Object): RequestBody;
    static plus(paramarg0: Pair<string, string>[], paramarg1: Pair<string, string>[]): Pair<string, string>[];
    static toRequestBody(paramarg0: JsonElement): RequestBody;
    static toRequestBody(paramarg0: JsonElement, paramarg1: Gson): RequestBody;
}