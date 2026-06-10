import type { KeyPair } from '../../../../java/security/KeyPair.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HttpClient } from '../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { BedrockAuthManager } from '../../../../net/raphimc/minecraftauth/bedrock/BedrockAuthManager.d.ts'
import type { MsaApplicationConfig } from '../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
import type { MsaToken } from '../../../../net/raphimc/minecraftauth/msa/model/MsaToken.d.ts'
import type { MsaAuthService } from '../../../../net/raphimc/minecraftauth/msa/service/MsaAuthService.d.ts'
import type { MsaAuthServiceSupplier } from '../../../../net/raphimc/minecraftauth/msa/service/util/MsaAuthServiceSupplier.d.ts'
import type { ParamMsaAuthServiceSupplier } from '../../../../net/raphimc/minecraftauth/msa/service/util/ParamMsaAuthServiceSupplier.d.ts'
export class BedrockAuthManager$Builder extends Object {
    private constructor(arg0: HttpClient, arg1: string)
    // private deviceId: UUID;
    // private deviceKeyPair: KeyPair;
    // private deviceType: string;
    // private gameVersion: string;
    // private httpClient: HttpClient;
    // private msaApplicationConfig: MsaApplicationConfig;
    // private sessionKeyPair: KeyPair;
    deviceId(arg0: UUID): BedrockAuthManager$Builder;
    deviceKeyPair(arg0: KeyPair): BedrockAuthManager$Builder;
    deviceType(arg0: string): BedrockAuthManager$Builder;
    login(arg0: string): BedrockAuthManager;
    login(arg0: MsaToken): BedrockAuthManager;
    login(arg0: (param0: HttpClient, param1: MsaApplicationConfig) => MsaAuthService): BedrockAuthManager;
    login<T extends Object | number | string | boolean>(arg0: (param0: HttpClient, param1: MsaApplicationConfig, param2: T) => MsaAuthService, arg1: T): BedrockAuthManager;
    msaApplicationConfig(arg0: MsaApplicationConfig): BedrockAuthManager$Builder;
    sessionKeyPair(arg0: KeyPair): BedrockAuthManager$Builder;
}