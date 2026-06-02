import type { ManagedIdentityParameters } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityParameters.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ManagedIdentityParameters$ManagedIdentityParametersBuilder extends Object {
    constructor()
    // private claims: string;
    // private forceRefresh: boolean;
    // private resource: string;
    build(): ManagedIdentityParameters;
    claims(arg0: string): ManagedIdentityParameters$ManagedIdentityParametersBuilder;
    forceRefresh(arg0: boolean): ManagedIdentityParameters$ManagedIdentityParametersBuilder;
    resource(arg0: string): ManagedIdentityParameters$ManagedIdentityParametersBuilder;
    toString(): string;
}