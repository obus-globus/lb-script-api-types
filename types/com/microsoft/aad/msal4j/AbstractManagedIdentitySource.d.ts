import type { IHttpResponse } from '../../../../com/microsoft/aad/msal4j/IHttpResponse.d.ts'
import type { ManagedIdentityIdType } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityIdType.d.ts'
import type { ManagedIdentityParameters } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityParameters.d.ts'
import type { ManagedIdentityRequest } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityRequest.d.ts'
import type { ManagedIdentityResponse } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityResponse.d.ts'
import type { ManagedIdentitySourceType } from '../../../../com/microsoft/aad/msal4j/ManagedIdentitySourceType.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { ServiceBundle } from '../../../../com/microsoft/aad/msal4j/ServiceBundle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractManagedIdentitySource extends Object {
    constructor(arg0: MsalRequest, arg1: ServiceBundle, arg2: ManagedIdentitySourceType)
    // private idType: ManagedIdentityIdType;
    // private isUserAssignedManagedIdentity: boolean;
    // private managedIdentityRequest: ManagedIdentityRequest;
    // private managedIdentitySourceType: ManagedIdentitySourceType;
    readonly managedIdentityUserAssignedClientId: string;
    readonly managedIdentityUserAssignedResourceId: string;
    // private serviceBundle: ServiceBundle;
    // private userAssignedId: string;
    createManagedIdentityRequest(arg0: string): void;
    getManagedIdentityResponse(arg0: ManagedIdentityParameters): ManagedIdentityResponse;
    getManagedIdentityUserAssignedClientId(): string;
    getManagedIdentityUserAssignedResourceId(): string;
    getMessageFromErrorResponse(arg0: IHttpResponse): string;
    getSuccessfulResponse(arg0: IHttpResponse): ManagedIdentityResponse;
    handleResponse(arg0: ManagedIdentityParameters, arg1: IHttpResponse): ManagedIdentityResponse;
    isUserAssignedManagedIdentity(): boolean;
    setManagedIdentityUserAssignedClientId(arg0: string): void;
    setManagedIdentityUserAssignedResourceId(arg0: string): void;
    setUserAssignedManagedIdentity(arg0: boolean): void;
}