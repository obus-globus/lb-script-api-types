import type { Object } from '../../../java/lang/Object.d.ts'
import type { ResponseBody } from '../../../okhttp3/ResponseBody.d.ts'
import type { Converter } from '../../../retrofit2/Converter.d.ts'
export class ScalarResponseBodyConverters$BooleanResponseBodyConverter extends Object implements Converter<ResponseBody, boolean> {
    constructor()
    convert(arg0: ResponseBody): boolean;
}