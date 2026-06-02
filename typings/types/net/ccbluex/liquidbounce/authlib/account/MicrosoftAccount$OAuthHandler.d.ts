import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MicrosoftAccount } from '../../../../../net/ccbluex/liquidbounce/authlib/account/MicrosoftAccount.d.ts'
export interface MicrosoftAccount$OAuthHandler extends Object{
    authError(error: string): void;
    authResult(account: MicrosoftAccount): void;
    openUrl(url: string): void;
}