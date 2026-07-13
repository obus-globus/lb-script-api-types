import type { Optional } from '../java/util/Optional.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { ResponseBody } from '../okhttp3/ResponseBody.d.ts'
import type { Converter } from '../retrofit2/Converter.d.ts'
export class OptionalConverterFactory$OptionalConverter<T extends unknown> extends Object implements Converter<ResponseBody, Optional<T>> {
    constructor(arg0: Converter<ResponseBody, T>)
    // private delegate: Converter<ResponseBody, T>;
    convert(arg0: ResponseBody): Optional<T>;
}