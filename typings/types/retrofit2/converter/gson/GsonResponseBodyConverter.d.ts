import type { Gson } from '../../../com/google/gson/Gson.d.ts'
import type { TypeAdapter } from '../../../com/google/gson/TypeAdapter.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResponseBody } from '../../../okhttp3/ResponseBody.d.ts'
import type { Converter } from '../../../retrofit2/Converter.d.ts'
export class GsonResponseBodyConverter<T extends unknown> extends Object implements Converter<ResponseBody, T> {
    constructor(arg0: Gson, arg1: TypeAdapter<T>)
    // private adapter: TypeAdapter<T>;
    // private gson: Gson;
    convert(arg0: ResponseBody): T;
}