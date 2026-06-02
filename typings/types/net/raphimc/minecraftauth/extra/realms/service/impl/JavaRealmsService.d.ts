import type { HttpCookie } from '../../../../../../../java/net/HttpCookie.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { HttpClient } from '../../../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { HttpRequest } from '../../../../../../../net/lenni0451/commons/httpclient/requests/HttpRequest.d.ts'
import type { RealmsJoinInformation } from '../../../../../../../net/raphimc/minecraftauth/extra/realms/model/RealmsJoinInformation.d.ts'
import type { RealmsServer } from '../../../../../../../net/raphimc/minecraftauth/extra/realms/model/RealmsServer.d.ts'
import type { RealmsService } from '../../../../../../../net/raphimc/minecraftauth/extra/realms/service/RealmsService.d.ts'
import type { MinecraftProfile } from '../../../../../../../net/raphimc/minecraftauth/java/model/MinecraftProfile.d.ts'
import type { MinecraftToken } from '../../../../../../../net/raphimc/minecraftauth/java/model/MinecraftToken.d.ts'
import type { Holder } from '../../../../../../../net/raphimc/minecraftauth/util/holder/Holder.d.ts'
export class JavaRealmsService extends RealmsService {
    constructor(arg0: HttpClient, arg1: string, arg2: Holder<MinecraftToken>, arg3: Holder<MinecraftProfile>)
    // private gameVersion: string;
    // private profile: Holder<MinecraftProfile>;
    // private token: Holder<MinecraftToken>;
    acceptTos(): void;
    acceptTosAsync(): CompletableFuture<void>;
    acceptTosUnchecked(): void;
    authorizeRequest<T extends HttpRequest>(arg0: T): T;
    // private createCookie(arg0: string, arg1: string): HttpCookie;
    joinWorld(arg0: RealmsServer): RealmsJoinInformation;
}