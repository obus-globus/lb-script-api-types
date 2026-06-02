import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { GetRequest } from '../../../../../../net/lenni0451/commons/httpclient/requests/impl/GetRequest.d.ts'
import type { RealmsJoinInformation } from '../../../../../../net/raphimc/minecraftauth/extra/realms/model/RealmsJoinInformation.d.ts'
import type { RealmsServer } from '../../../../../../net/raphimc/minecraftauth/extra/realms/model/RealmsServer.d.ts'
import type { RealmsResponseHandler } from '../../../../../../net/raphimc/minecraftauth/extra/realms/responsehandler/RealmsResponseHandler.d.ts'
export class JavaRealmsWorldJoinRequest extends GetRequest implements RealmsResponseHandler<RealmsJoinInformation> {
    constructor(arg0: RealmsServer)
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): RealmsJoinInformation;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}