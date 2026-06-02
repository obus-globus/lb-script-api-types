import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HttpClient } from '../../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { MsaApplicationConfig } from '../../../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
import type { MsaAuthService } from '../../../../../../net/raphimc/minecraftauth/msa/service/MsaAuthService.d.ts'
export interface MsaAuthServiceSupplier extends Object{
    get(arg0: HttpClient, arg1: MsaApplicationConfig): MsaAuthService;
}