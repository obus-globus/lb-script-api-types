import type { AbstractApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { IApplicationBase } from '../../../../com/microsoft/aad/msal4j/IApplicationBase.d.ts'
import type { PublicApi } from '../../../../com/microsoft/aad/msal4j/PublicApi.d.ts'
import type { UserIdentifier } from '../../../../com/microsoft/aad/msal4j/UserIdentifier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RequestContext extends Object {
    constructor(arg0: AbstractApplicationBase, arg1: PublicApi, arg2: IAcquireTokenParameters)
    constructor(arg0: AbstractApplicationBase, arg1: PublicApi, arg2: IAcquireTokenParameters, arg3: UserIdentifier)
    // private apiParameters: IAcquireTokenParameters;
    // private applicationName: string;
    // private applicationVersion: string;
    // private authority: string;
    // private clientApplication: IApplicationBase;
    // private clientId: string;
    // private correlationId: string;
    // private publicApi: PublicApi;
    // private telemetryRequestId: string;
    // private userIdentifier: UserIdentifier;
    apiParameters(): IAcquireTokenParameters;
    applicationName(): string;
    applicationVersion(): string;
    authority(): string;
    clientApplication(): IApplicationBase;
    clientId(): string;
    correlationId(): string;
    publicApi(): PublicApi;
    telemetryRequestId(): string;
    telemetryRequestId(arg0: string): RequestContext;
    userIdentifier(): UserIdentifier;
}