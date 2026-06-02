import type { AbstractApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase.d.ts'
import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RemoveAccountRunnable extends Object implements Runnable {
    constructor(arg0: MsalRequest, arg1: IAccount)
    // private account: IAccount;
    // private clientApplication: AbstractApplicationBase;
    // private requestContext: RequestContext;
    run(): void;
}