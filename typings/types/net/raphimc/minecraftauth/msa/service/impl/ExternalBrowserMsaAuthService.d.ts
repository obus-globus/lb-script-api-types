import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { HttpClient } from '../../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { MsaApplicationConfig } from '../../../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
import type { MsaToken } from '../../../../../../net/raphimc/minecraftauth/msa/model/MsaToken.d.ts'
import type { MsaAuthService } from '../../../../../../net/raphimc/minecraftauth/msa/service/MsaAuthService.d.ts'
export class ExternalBrowserMsaAuthService extends MsaAuthService {
    constructor(arg0: HttpClient, arg1: MsaApplicationConfig, arg2: (param0: ExternalBrowserMsaAuthService) => void, arg3: (param0: ExternalBrowserMsaAuthService) => void)
    constructor(arg0: HttpClient, arg1: MsaApplicationConfig, arg2: (param0: ExternalBrowserMsaAuthService) => void, arg3: (param0: ExternalBrowserMsaAuthService) => void, arg4: number)
    // private authCodeFuture: CompletableFuture<string>;
    // private closeCallback: (param0: ExternalBrowserMsaAuthService) => void;
    // private openCallback: (param0: ExternalBrowserMsaAuthService) => void;
    // private timeoutMs: number;
    acquireToken(): MsaToken;
    cancel(): void;
    getAuthenticationUrl(): URL;
    handleNavigation(arg0: string): boolean;
}