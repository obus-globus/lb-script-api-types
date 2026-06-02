import type { OpenBrowserAction } from '../../../../com/microsoft/aad/msal4j/OpenBrowserAction.d.ts'
import type { SystemBrowserOptions } from '../../../../com/microsoft/aad/msal4j/SystemBrowserOptions.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SystemBrowserOptions$SystemBrowserOptionsBuilder extends Object {
    constructor()
    // private browserRedirectError: URI;
    // private browserRedirectSuccess: URI;
    // private htmlMessageError: string;
    // private htmlMessageSuccess: string;
    // private openBrowserAction: OpenBrowserAction;
    browserRedirectError(arg0: URI): SystemBrowserOptions$SystemBrowserOptionsBuilder;
    browserRedirectSuccess(arg0: URI): SystemBrowserOptions$SystemBrowserOptionsBuilder;
    build(): SystemBrowserOptions;
    htmlMessageError(arg0: string): SystemBrowserOptions$SystemBrowserOptionsBuilder;
    htmlMessageSuccess(arg0: string): SystemBrowserOptions$SystemBrowserOptionsBuilder;
    openBrowserAction(arg0: OpenBrowserAction): SystemBrowserOptions$SystemBrowserOptionsBuilder;
    toString(): string;
}