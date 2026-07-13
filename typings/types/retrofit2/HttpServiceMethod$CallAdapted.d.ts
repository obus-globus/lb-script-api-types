import type { Object } from '../java/lang/Object.d.ts'
import type { Call$Factory } from '../okhttp3/Call$Factory.d.ts'
import type { ResponseBody } from '../okhttp3/ResponseBody.d.ts'
import type { Call } from '../retrofit2/Call.d.ts'
import type { CallAdapter } from '../retrofit2/CallAdapter.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
import type { HttpServiceMethod } from '../retrofit2/HttpServiceMethod.d.ts'
import type { RequestFactory } from '../retrofit2/RequestFactory.d.ts'
export class HttpServiceMethod$CallAdapted<ResponseT extends unknown, ReturnT extends unknown> extends HttpServiceMethod<ResponseT, ReturnT> {
    constructor(arg0: RequestFactory, arg1: Call$Factory, arg2: Converter<ResponseBody, ResponseT>, arg3: CallAdapter<ResponseT, ReturnT>)
    // private callAdapter: CallAdapter<ResponseT, ReturnT>;
    adapt(arg0: Call<ResponseT>, arg1: Object[]): ReturnT;
}