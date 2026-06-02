import type { URL } from '../../../../../../java/net/URL.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { HttpClient } from '../../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { MsaApplicationConfig } from '../../../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
import type { MsaToken } from '../../../../../../net/raphimc/minecraftauth/msa/model/MsaToken.d.ts'
import type { MsaAuthService } from '../../../../../../net/raphimc/minecraftauth/msa/service/MsaAuthService.d.ts'
export class LocalWebServerMsaAuthService extends MsaAuthService {
    constructor(arg0: HttpClient, arg1: MsaApplicationConfig, arg2: (param0: URL) => void)
    constructor(arg0: HttpClient, arg1: MsaApplicationConfig, arg2: (param0: URL) => void, arg3: number)
    // private callback: (param0: URL) => void;
    // private timeoutMs: number;
    acquireToken(): MsaToken;
}