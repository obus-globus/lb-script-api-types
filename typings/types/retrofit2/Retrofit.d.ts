import type { JavaMap } from '../JavaMap.d.ts'
import type { Class } from '../java/lang/Class.d.ts'
import type { Method } from '../java/lang/reflect/Method.d.ts'
import type { Type } from '../java/lang/reflect/Type.d.ts'
import type { Executor } from '../java/util/concurrent/Executor.d.ts'
import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Call$Factory } from '../okhttp3/Call$Factory.d.ts'
import type { HttpUrl } from '../okhttp3/HttpUrl.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
import type { ResponseBody } from '../okhttp3/ResponseBody.d.ts'
import type { CallAdapter } from '../retrofit2/CallAdapter.d.ts'
import type { CallAdapter$Factory } from '../retrofit2/CallAdapter$Factory.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
import type { Converter$Factory } from '../retrofit2/Converter$Factory.d.ts'
import type { Retrofit$Builder } from '../retrofit2/Retrofit$Builder.d.ts'
import type { ServiceMethod } from '../retrofit2/ServiceMethod.d.ts'
export class Retrofit extends Object {
    constructor(arg0: Call$Factory, arg1: HttpUrl, arg2: Converter$Factory[], arg3: number, arg4: CallAdapter$Factory[], arg5: number, arg6: Executor, arg7: boolean)
    // private baseUrl: HttpUrl;
    // private callAdapterFactories: CallAdapter$Factory[];
    // private callFactory: Call$Factory;
    // private callbackExecutor: Executor;
    // private converterFactories: Converter$Factory[];
    // private defaultCallAdapterFactoriesSize: number;
    // private defaultConverterFactoriesSize: number;
    // private serviceMethodCache: JavaMap<Method, Object>;
    // private validateEagerly: boolean;
    baseUrl(): HttpUrl;
    callAdapter(arg0: Type, arg1: Annotation[]): CallAdapter<Object, Object>;
    callAdapterFactories(): CallAdapter$Factory[];
    callFactory(): Call$Factory;
    callbackExecutor(): Executor;
    converterFactories(): Converter$Factory[];
    create<T extends unknown>(arg0: Class<T>): T;
    loadServiceMethod(arg0: Class<Object>, arg1: Method): ServiceMethod<Object>;
    newBuilder(): Retrofit$Builder;
    nextCallAdapter(arg0: CallAdapter$Factory, arg1: Type, arg2: Annotation[]): CallAdapter<Object, Object>;
    nextRequestBodyConverter<T extends unknown>(arg0: Converter$Factory, arg1: Type, arg2: Annotation[], arg3: Annotation[]): Converter<T, RequestBody>;
    nextResponseBodyConverter<T extends unknown>(arg0: Converter$Factory, arg1: Type, arg2: Annotation[]): Converter<ResponseBody, T>;
    requestBodyConverter<T extends unknown>(arg0: Type, arg1: Annotation[], arg2: Annotation[]): Converter<T, RequestBody>;
    responseBodyConverter<T extends unknown>(arg0: Type, arg1: Annotation[]): Converter<ResponseBody, T>;
    stringConverter<T extends unknown>(arg0: Type, arg1: Annotation[]): Converter<T, string>;
    // private validateServiceInterface(arg0: Class<Object>): void;
}