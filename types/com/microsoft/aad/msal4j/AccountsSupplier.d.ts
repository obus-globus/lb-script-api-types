import type { AbstractClientApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractClientApplicationBase.d.ts'
import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AccountsSupplier extends Object implements Supplier<IAccount[]> {
    constructor(arg0: AbstractClientApplicationBase, arg1: MsalRequest)
    // private clientApplication: AbstractClientApplicationBase;
    // private msalRequest: MsalRequest;
    get(): IAccount[];
}