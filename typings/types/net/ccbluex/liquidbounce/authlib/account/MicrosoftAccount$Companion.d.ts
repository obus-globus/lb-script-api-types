import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MicrosoftAccount } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MicrosoftAccount.d.ts'
import type { MicrosoftAccount$AuthMethod } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MicrosoftAccount$AuthMethod.d.ts'
import type { MicrosoftAccount$OAuthHandler } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MicrosoftAccount$OAuthHandler.d.ts'
import type { OAuthServer } from '../../../../../net/ccbluex/liquidbounce/authlib/compat/OAuthServer.d.ts'
export class MicrosoftAccount$Companion extends Object {
    MC_AUTH_DATA: string;
    MC_AUTH_URL: string;
    MC_PROFILE_URL: string;
    XBOX_AUTH_DATA: string;
    XBOX_AUTH_URL: string;
    XBOX_PRE_AUTH_URL: string;
    XBOX_REFRESH_DATA: string;
    XBOX_XBL_DATA: string;
    XBOX_XBL_URL: string;
    XBOX_XSTS_DATA: string;
    XBOX_XSTS_URL: string;
    buildFromAuthCode(code: string, method: MicrosoftAccount$AuthMethod): MicrosoftAccount;
    buildFromOpenBrowser(handler: MicrosoftAccount$OAuthHandler, authMethod: MicrosoftAccount$AuthMethod): OAuthServer;
    buildFromRefreshToken(token: string): MicrosoftAccount;
    // private msError(response: string): void;
    replaceKeys(method: MicrosoftAccount$AuthMethod, string: string): string;
}