import type { Object } from '../java/lang/Object.d.ts'
import type { Call$Factory } from '../okhttp3/Call$Factory.d.ts'
import type { ResponseBody } from '../okhttp3/ResponseBody.d.ts'
import type { Call } from '../retrofit2/Call.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
import type { RequestFactory } from '../retrofit2/RequestFactory.d.ts'
import type { ServiceMethod } from '../retrofit2/ServiceMethod.d.ts'
export abstract class HttpServiceMethod<ResponseT extends unknown, ReturnT extends unknown> extends ServiceMethod<ReturnT> {
    constructor(arg0: RequestFactory, arg1: Call$Factory, arg2: Converter<ResponseBody, ResponseT>)
    // private callFactory: Call$Factory;
    // private requestFactory: RequestFactory;
    // private responseConverter: Converter<ResponseBody, ResponseT>;
    adapt(arg0: Call<ResponseT>, arg1: Object[]): ReturnT;
    invoke(arg0: Object, arg1: Object[]): ReturnT;
}