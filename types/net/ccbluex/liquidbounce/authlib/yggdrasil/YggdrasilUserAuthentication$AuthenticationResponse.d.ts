import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { YggdrasilUserAuthentication$AuthenticationResponse$Profile } from '../../../../../net/ccbluex/liquidbounce/authlib/yggdrasil/YggdrasilUserAuthentication$AuthenticationResponse$Profile.d.ts'
export class YggdrasilUserAuthentication$AuthenticationResponse extends Object {
    constructor(accessToken: string, clientToken: string, availableProfiles: YggdrasilUserAuthentication$AuthenticationResponse$Profile[], selectedProfile: YggdrasilUserAuthentication$AuthenticationResponse$Profile | null)
    readonly accessToken: string;
    readonly availableProfiles: YggdrasilUserAuthentication$AuthenticationResponse$Profile[];
    readonly clientToken: string;
    readonly selectedProfile: YggdrasilUserAuthentication$AuthenticationResponse$Profile | null;
}