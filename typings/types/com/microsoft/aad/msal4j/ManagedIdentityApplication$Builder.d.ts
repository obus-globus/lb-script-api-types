import type { AbstractApplicationBase$Builder } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase$Builder.d.ts'
import type { ManagedIdentityApplication } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityApplication.d.ts'
import type { ManagedIdentityId } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityId.d.ts'
export class ManagedIdentityApplication$Builder extends AbstractApplicationBase$Builder<ManagedIdentityApplication$Builder> {
    private constructor(arg0: ManagedIdentityId)
    // private clientCapabilities: string[];
    // private managedIdentityId: ManagedIdentityId;
    // private resource: string;
    build(): ManagedIdentityApplication;
    clientCapabilities(arg0: string[]): ManagedIdentityApplication$Builder;
    resource(arg0: string): ManagedIdentityApplication$Builder;
    self(): ManagedIdentityApplication$Builder;
}