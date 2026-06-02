import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { ClientCredentialParameters } from '../../../../com/microsoft/aad/msal4j/ClientCredentialParameters.d.ts'
import type { ConfidentialClientApplication } from '../../../../com/microsoft/aad/msal4j/ConfidentialClientApplication.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { GameProfile } from '../../../../com/mojang/authlib/GameProfile.d.ts'
import type { HttpURLConnection } from '../../../../java/net/HttpURLConnection.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { DedicatedServerProperties } from '../../../../net/minecraft/server/dedicated/DedicatedServerProperties.d.ts'
import type { FilteredText } from '../../../../net/minecraft/server/network/FilteredText.d.ts'
import type { ServerTextFilter } from '../../../../net/minecraft/server/network/ServerTextFilter.d.ts'
import type { ServerTextFilter$IgnoreStrategy } from '../../../../net/minecraft/server/network/ServerTextFilter$IgnoreStrategy.d.ts'
import type { ServerTextFilter$MessageEncoder } from '../../../../net/minecraft/server/network/ServerTextFilter$MessageEncoder.d.ts'
export class PlayerSafetyServiceTextFilter extends ServerTextFilter {
    static createFromConfig(paramconfig: DedicatedServerProperties): ServerTextFilter;
    static createTextFilterFromConfig(paramtextFilteringConfig: string): ServerTextFilter;
    private constructor(chatEndpoint: URL, chatEncoder: (param0: GameProfile, param1: string) => com.google.gson.JsonObject, chatIgnoreStrategy: (param0: string, param1: number) => kotlin.Boolean, workerPool: ExecutorService, client: ConfidentialClientApplication, clientParameters: ClientCredentialParameters, fullyFilteredEvents: string[], connectionReadTimeoutMs: number)
    // private client: ConfidentialClientApplication;
    // private clientParameters: ClientCredentialParameters;
    // private connectionReadTimeoutMs: number;
    // private fullyFilteredEvents: string[];
    // private aquireIAuthenticationResult(): IAuthenticationResult;
    connectionReadTimeout(): number;
    filterText(message: string, ignoreStrategy: (param0: string, param1: number) => kotlin.Boolean, response: JsonObject): FilteredText;
    setAuthorizationProperty(connection: HttpURLConnection): void;
}