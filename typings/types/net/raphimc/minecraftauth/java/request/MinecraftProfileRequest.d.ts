import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { GetRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/GetRequest.d.ts'
import type { MinecraftProfile } from '../../../../../net/raphimc/minecraftauth/java/model/MinecraftProfile.d.ts'
import type { MinecraftToken } from '../../../../../net/raphimc/minecraftauth/java/model/MinecraftToken.d.ts'
import type { MinecraftServicesResponseHandler } from '../../../../../net/raphimc/minecraftauth/java/responsehandler/MinecraftServicesResponseHandler.d.ts'
export class MinecraftProfileRequest extends GetRequest implements MinecraftServicesResponseHandler<MinecraftProfile> {
    constructor(arg0: MinecraftToken)
    handle(arg0: HttpResponse): MinecraftProfile;
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): MinecraftProfile;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}