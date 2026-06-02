import type { IClientCredential } from '../../../../com/microsoft/aad/msal4j/IClientCredential.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IClientAssertion extends IClientCredential, Object{
    assertion(): string;
}