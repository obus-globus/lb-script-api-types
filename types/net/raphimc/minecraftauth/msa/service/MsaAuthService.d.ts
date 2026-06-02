import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HttpClient } from '../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { MsaApplicationConfig } from '../../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
import type { MsaToken } from '../../../../../net/raphimc/minecraftauth/msa/model/MsaToken.d.ts'
export abstract class MsaAuthService extends Object {
    constructor(arg0: HttpClient, arg1: MsaApplicationConfig)
    readonly applicationConfig: MsaApplicationConfig;
    readonly httpClient: HttpClient;
    acquireToken(): MsaToken;
    acquireTokenAsync(): CompletableFuture<MsaToken>;
    acquireTokenUnchecked(): MsaToken;
    getApplicationConfig(): MsaApplicationConfig;
    getHttpClient(): HttpClient;
}