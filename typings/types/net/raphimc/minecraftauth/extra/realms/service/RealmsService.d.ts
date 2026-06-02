import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HttpClient } from '../../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { HttpRequest } from '../../../../../../net/lenni0451/commons/httpclient/requests/HttpRequest.d.ts'
import type { RealmsJoinInformation } from '../../../../../../net/raphimc/minecraftauth/extra/realms/model/RealmsJoinInformation.d.ts'
import type { RealmsServer } from '../../../../../../net/raphimc/minecraftauth/extra/realms/model/RealmsServer.d.ts'
export abstract class RealmsService extends Object {
    constructor(arg0: HttpClient, arg1: string)
    readonly host: string;
    readonly httpClient: HttpClient;
    authorizeRequest<T extends HttpRequest>(arg0: T): T;
    getHost(): string;
    getHttpClient(): HttpClient;
    getWorlds(): RealmsServer[];
    getWorldsAsync(): CompletableFuture<RealmsServer[]>;
    getWorldsUnchecked(): RealmsServer[];
    isCompatible(): boolean;
    isCompatibleAsync(): CompletableFuture<boolean>;
    isCompatibleUnchecked(): boolean;
    joinWorld(arg0: RealmsServer): RealmsJoinInformation;
    joinWorldAsync(arg0: RealmsServer): CompletableFuture<RealmsJoinInformation>;
    joinWorldUnchecked(arg0: RealmsServer): RealmsJoinInformation;
}