import type { Object } from '../java/lang/Object.d.ts'
import type { RequestBody } from '../okhttp3/RequestBody.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
export class BuiltInConverters$RequestBodyConverter extends Object implements Converter<RequestBody, RequestBody> {
    constructor()
    convert(arg0: RequestBody): RequestBody;
}