import type { AbstractApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase.d.ts'
import type { AuthenticationResult } from '../../../../com/microsoft/aad/msal4j/AuthenticationResult.d.ts'
import type { Authority } from '../../../../com/microsoft/aad/msal4j/Authority.d.ts'
import type { HttpHeaders } from '../../../../com/microsoft/aad/msal4j/HttpHeaders.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AuthenticationResultSupplier extends Object implements Supplier<IAuthenticationResult> {
    constructor(arg0: AbstractApplicationBase, arg1: MsalRequest)
    // private clientApplication: AbstractApplicationBase;
    // private msalRequest: MsalRequest;
    // private computeSha256Hash(arg0: string): string;
    execute(): AuthenticationResult;
    get(): IAuthenticationResult;
    getAuthorityWithPrefNetworkHost(arg0: string): Authority;
    // private initializeApiEvent(arg0: MsalRequest): { [key: string]: any };
    // private logResult(arg0: AuthenticationResult, arg1: HttpHeaders): void;
}