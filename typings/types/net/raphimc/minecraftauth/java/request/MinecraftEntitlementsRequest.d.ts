import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { GetRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/GetRequest.d.ts'
import type { MinecraftEntitlements } from '../../../../../net/raphimc/minecraftauth/java/model/MinecraftEntitlements.d.ts'
import type { MinecraftToken } from '../../../../../net/raphimc/minecraftauth/java/model/MinecraftToken.d.ts'
import type { MinecraftServicesResponseHandler } from '../../../../../net/raphimc/minecraftauth/java/responsehandler/MinecraftServicesResponseHandler.d.ts'
export class MinecraftEntitlementsRequest extends GetRequest implements MinecraftServicesResponseHandler<MinecraftEntitlements> {
    constructor(arg0: MinecraftToken)
    handle(arg0: HttpResponse): MinecraftEntitlements;
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): MinecraftEntitlements;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}