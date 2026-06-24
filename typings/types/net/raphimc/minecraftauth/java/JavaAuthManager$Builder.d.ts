import type { JavaAuthManager$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { KeyPair } from '../../../../java/security/KeyPair.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HttpClient } from '../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { JavaAuthManager } from '../../../../net/raphimc/minecraftauth/java/JavaAuthManager.d.ts'
import type { MsaApplicationConfig } from '../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
import type { MsaToken } from '../../../../net/raphimc/minecraftauth/msa/model/MsaToken.d.ts'
import type { MsaAuthService } from '../../../../net/raphimc/minecraftauth/msa/service/MsaAuthService.d.ts'
import type { MsaAuthServiceSupplier } from '../../../../net/raphimc/minecraftauth/msa/service/util/MsaAuthServiceSupplier.d.ts'
import type { ParamMsaAuthServiceSupplier } from '../../../../net/raphimc/minecraftauth/msa/service/util/ParamMsaAuthServiceSupplier.d.ts'
export class JavaAuthManager$Builder extends Object {
    private constructor(arg0: HttpClient)
    constructor(arg0: HttpClient, arg1: JavaAuthManager$1)
    // private deviceId: UUID;
    // private deviceKeyPair: KeyPair;
    // private deviceType: string;
    // private httpClient: HttpClient;
    // private msaApplicationConfig: MsaApplicationConfig;
    deviceId(arg0: UUID): JavaAuthManager$Builder;
    deviceKeyPair(arg0: KeyPair): JavaAuthManager$Builder;
    deviceType(arg0: string): JavaAuthManager$Builder;
    login(arg0: string): JavaAuthManager;
    login(arg0: MsaToken): JavaAuthManager;
    login(arg0: (param0: HttpClient, param1: MsaApplicationConfig) => MsaAuthService): JavaAuthManager;
    login<T extends unknown>(arg0: (param0: HttpClient, param1: MsaApplicationConfig, param2: T) => MsaAuthService, arg1: T): JavaAuthManager;
    msaApplicationConfig(arg0: MsaApplicationConfig): JavaAuthManager$Builder;
}