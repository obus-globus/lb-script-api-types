import type { Object } from '../java/lang/Object.d.ts'
import type { ResponseBody } from '../okhttp3/ResponseBody.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
export class BuiltInConverters$StreamingResponseBodyConverter extends Object implements Converter<ResponseBody, ResponseBody> {
    constructor()
    convert(arg0: ResponseBody): ResponseBody;
}