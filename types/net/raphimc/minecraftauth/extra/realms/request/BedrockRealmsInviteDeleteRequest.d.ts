import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { DeleteRequest } from '../../../../../../net/lenni0451/commons/httpclient/requests/impl/DeleteRequest.d.ts'
import type { RealmsServer } from '../../../../../../net/raphimc/minecraftauth/extra/realms/model/RealmsServer.d.ts'
import type { RealmsResponseHandler } from '../../../../../../net/raphimc/minecraftauth/extra/realms/responsehandler/RealmsResponseHandler.d.ts'
export class BedrockRealmsInviteDeleteRequest extends DeleteRequest implements RealmsResponseHandler<void> {
    constructor(arg0: RealmsServer)
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}