import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { XboxAuthRequest } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/XboxAuthRequest.d.ts'
import type { XboxAuthResponse } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/XboxAuthResponse.d.ts'
export interface XboxLiveApi extends Object{
    authenticateWithXbox(request: XboxAuthRequest): XboxAuthResponse;
}