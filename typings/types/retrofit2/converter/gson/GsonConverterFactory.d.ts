import type { Gson } from '../../../com/google/gson/Gson.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RequestBody } from '../../../okhttp3/RequestBody.d.ts'
import type { ResponseBody } from '../../../okhttp3/ResponseBody.d.ts'
import type { Converter } from '../../../retrofit2/Converter.d.ts'
import type { Converter$Factory } from '../../../retrofit2/Converter$Factory.d.ts'
import type { Retrofit } from '../../../retrofit2/Retrofit.d.ts'
export class GsonConverterFactory extends Converter$Factory {
    static create(): GsonConverterFactory;
    static create(paramarg0: Gson): GsonConverterFactory;
    private constructor(arg0: Gson, arg1: boolean)
    // private gson: Gson;
    // private streaming: boolean;
    requestBodyConverter(arg0: Type, arg1: Annotation[], arg2: Annotation[], arg3: Retrofit): Converter<Object, RequestBody>;
    responseBodyConverter(arg0: Type, arg1: Annotation[], arg2: Retrofit): Converter<ResponseBody, Object>;
    withStreaming(): GsonConverterFactory;
}