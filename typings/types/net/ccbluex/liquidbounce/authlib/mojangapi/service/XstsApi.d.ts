import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { XboxAuthResponse } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/XboxAuthResponse.d.ts'
import type { XstsAuthRequest } from '../../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/model/XstsAuthRequest.d.ts'
export interface XstsApi extends Object{
    authorizeWithXsts(request: XstsAuthRequest): XboxAuthResponse;
}