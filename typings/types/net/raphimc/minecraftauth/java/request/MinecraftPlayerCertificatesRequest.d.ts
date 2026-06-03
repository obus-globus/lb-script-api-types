import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { PostRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
import type { MinecraftPlayerCertificates } from '../../../../../net/raphimc/minecraftauth/java/model/MinecraftPlayerCertificates.d.ts'
import type { MinecraftToken } from '../../../../../net/raphimc/minecraftauth/java/model/MinecraftToken.d.ts'
import type { MinecraftServicesResponseHandler } from '../../../../../net/raphimc/minecraftauth/java/responsehandler/MinecraftServicesResponseHandler.d.ts'
export class MinecraftPlayerCertificatesRequest extends PostRequest implements MinecraftServicesResponseHandler<MinecraftPlayerCertificates> {
    constructor(arg0: MinecraftToken)
    handle(arg0: HttpResponse): MinecraftPlayerCertificates;
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): MinecraftPlayerCertificates;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}