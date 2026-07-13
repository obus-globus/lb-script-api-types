import type { Type } from '../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
import type { ResponseBody } from '../okhttp3/ResponseBody.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
import type { Retrofit } from '../retrofit2/Retrofit.d.ts'
export abstract class Converter$Factory extends Object {
    constructor()
    requestBodyConverter(arg0: Type, arg1: Annotation[], arg2: Annotation[], arg3: Retrofit): Converter<Object, RequestBody>;
    responseBodyConverter(arg0: Type, arg1: Annotation[], arg2: Retrofit): Converter<ResponseBody, Object>;
    stringConverter(arg0: Type, arg1: Annotation[], arg2: Retrofit): Converter<Object, string>;
}