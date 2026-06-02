import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { HttpClient } from '../../../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { HttpRequest } from '../../../../../../../net/lenni0451/commons/httpclient/requests/HttpRequest.d.ts'
import type { RealmsJoinInformation } from '../../../../../../../net/raphimc/minecraftauth/extra/realms/model/RealmsJoinInformation.d.ts'
import type { RealmsServer } from '../../../../../../../net/raphimc/minecraftauth/extra/realms/model/RealmsServer.d.ts'
import type { RealmsService } from '../../../../../../../net/raphimc/minecraftauth/extra/realms/service/RealmsService.d.ts'
import type { Holder } from '../../../../../../../net/raphimc/minecraftauth/util/holder/Holder.d.ts'
import type { XblXstsToken } from '../../../../../../../net/raphimc/minecraftauth/xbl/model/XblXstsToken.d.ts'
export class BedrockRealmsService extends RealmsService {
    constructor(arg0: HttpClient, arg1: string, arg2: Holder<XblXstsToken>)
    // private gameVersion: string;
    // private xstsToken: Holder<XblXstsToken>;
    acceptInvite(arg0: string): RealmsServer;
    acceptInviteAsync(arg0: string): CompletableFuture<RealmsServer>;
    acceptInviteUnchecked(arg0: string): RealmsServer;
    authorizeRequest<T extends HttpRequest>(arg0: T): T;
    joinWorld(arg0: RealmsServer): RealmsJoinInformation;
    leaveInvitedRealm(arg0: RealmsServer): void;
    leaveInvitedRealmAsync(arg0: RealmsServer): CompletableFuture<void>;
    leaveInvitedRealmUnchecked(arg0: RealmsServer): void;
}