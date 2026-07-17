import type { AbstractApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { IManagedIdentityApplication } from '../../../../com/microsoft/aad/msal4j/IManagedIdentityApplication.d.ts'
import type { ManagedIdentityApplication$Builder } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityApplication$Builder.d.ts'
import type { ManagedIdentityId } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityId.d.ts'
import type { ManagedIdentityParameters } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityParameters.d.ts'
import type { ManagedIdentitySourceType } from '../../../../com/microsoft/aad/msal4j/ManagedIdentitySourceType.d.ts'
import type { TokenCache } from '../../../../com/microsoft/aad/msal4j/TokenCache.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
export class ManagedIdentityApplication extends AbstractApplicationBase implements IManagedIdentityApplication {
    static DEFAULT_AUTHORITY: string;
    static builder(paramarg0: ManagedIdentityId): ManagedIdentityApplication$Builder;
    static getManagedIdentitySource(): ManagedIdentitySourceType;
    static getSharedTokenCache(): TokenCache;
    private constructor(arg0: ManagedIdentityApplication$Builder)
    readonly clientCapabilities: string[];
    readonly managedIdentityId: ManagedIdentityId;
    // private managedIdentitySource: ManagedIdentitySourceType;
    acquireTokenForManagedIdentity(arg0: ManagedIdentityParameters): CompletableFuture<IAuthenticationResult>;
    getClientCapabilities(): string[];
    getManagedIdentityId(): ManagedIdentityId;
}