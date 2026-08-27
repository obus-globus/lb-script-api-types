import type { Gson } from '../../../com/google/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../com/google/gson/TypeAdapter.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RequestBody } from '../../../okhttp3/RequestBody.d.ts'
import type { Converter } from '../../../retrofit2/Converter.d.ts'
export class GsonRequestBodyConverter<T extends unknown> extends Object implements Converter<T, RequestBody> {
    constructor(arg0: Gson, arg1: TypeAdapter<T>, arg2: boolean)
    // private adapter: TypeAdapter<T>;
    // private gson: Gson;
    // private streaming: boolean;
    convert(arg0: T): RequestBody;
}