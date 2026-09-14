import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { YggdrasilUserAuthentication$AuthenticationResponse$Profile } from '../../../../../net/ccbluex/liquidbounce/features/account/YggdrasilUserAuthentication$AuthenticationResponse$Profile.d.ts'
export class YggdrasilUserAuthentication$AuthenticationResponse extends Object {
    constructor(accessToken: string, clientToken: string, availableProfiles: YggdrasilUserAuthentication$AuthenticationResponse$Profile[], selectedProfile: YggdrasilUserAuthentication$AuthenticationResponse$Profile | null)
    readonly accessToken: string;
    readonly availableProfiles: YggdrasilUserAuthentication$AuthenticationResponse$Profile[];
    readonly clientToken: string;
    /**
     * Absent for a valid account without a Minecraft license - the authentication still succeeds.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/account/YggdrasilUserAuthentication.kt#L64 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/YggdrasilUserAuthentication.kt:64}
     */
    readonly selectedProfile: YggdrasilUserAuthentication$AuthenticationResponse$Profile | null;
}