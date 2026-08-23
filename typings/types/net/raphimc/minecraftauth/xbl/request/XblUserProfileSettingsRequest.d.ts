import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { GetRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/GetRequest.d.ts'
import type { XblUserProfile } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblUserProfile.d.ts'
import type { XblXstsToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblXstsToken.d.ts'
import type { XblResponseHandler } from '../../../../../net/raphimc/minecraftauth/xbl/responsehandler/XblResponseHandler.d.ts'
export class XblUserProfileSettingsRequest extends GetRequest implements XblResponseHandler<XblUserProfile> {
    constructor(arg0: XblXstsToken, arg1: string, ...arg2: string[])
    constructor(arg0: XblXstsToken, arg1: string, arg2: string[])
    handle(arg0: HttpResponse): XblUserProfile;
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): XblUserProfile;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}