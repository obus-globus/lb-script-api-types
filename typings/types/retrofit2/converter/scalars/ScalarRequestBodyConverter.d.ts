import type { Object } from '../../../java/lang/Object.d.ts'
import type { RequestBody } from '../../../okhttp3/RequestBody.d.ts'
import type { Converter } from '../../../retrofit2/Converter.d.ts'
export class ScalarRequestBodyConverter<T extends unknown> extends Object implements Converter<T, RequestBody> {
    private constructor()
    convert(arg0: T): RequestBody;
}