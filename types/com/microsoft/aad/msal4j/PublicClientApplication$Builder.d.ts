import type { AbstractClientApplicationBase$Builder } from '../../../../com/microsoft/aad/msal4j/AbstractClientApplicationBase$Builder.d.ts'
import type { IBroker } from '../../../../com/microsoft/aad/msal4j/IBroker.d.ts'
import type { PublicClientApplication } from '../../../../com/microsoft/aad/msal4j/PublicClientApplication.d.ts'
export class PublicClientApplication$Builder extends AbstractClientApplicationBase$Builder<PublicClientApplication$Builder> {
    private constructor(arg0: string)
    // private broker: IBroker;
    // private brokerEnabled: boolean;
    broker(arg0: IBroker): PublicClientApplication$Builder;
    build(): PublicClientApplication;
    self(): PublicClientApplication$Builder;
}