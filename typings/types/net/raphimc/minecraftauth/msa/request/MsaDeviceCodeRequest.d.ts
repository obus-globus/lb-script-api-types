import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { PostRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
import type { MsaApplicationConfig } from '../../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
import type { MsaDeviceCode } from '../../../../../net/raphimc/minecraftauth/msa/model/MsaDeviceCode.d.ts'
import type { MsaResponseHandler } from '../../../../../net/raphimc/minecraftauth/msa/responsehandler/MsaResponseHandler.d.ts'
export class MsaDeviceCodeRequest extends PostRequest implements MsaResponseHandler<MsaDeviceCode> {
    constructor(arg0: MsaApplicationConfig)
    handle(arg0: HttpResponse): MsaDeviceCode;
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): MsaDeviceCode;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}