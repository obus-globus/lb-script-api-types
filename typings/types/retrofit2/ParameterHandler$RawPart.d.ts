import type { MultipartBody$Part } from '../okhttp3/MultipartBody$Part.d.ts'
import type { ParameterHandler } from '../retrofit2/ParameterHandler.d.ts'
import type { RequestBuilder } from '../retrofit2/RequestBuilder.d.ts'
export class ParameterHandler$RawPart extends ParameterHandler<MultipartBody$Part> {
    private constructor()
    apply(arg0: RequestBuilder, arg1: MultipartBody$Part): void;
}