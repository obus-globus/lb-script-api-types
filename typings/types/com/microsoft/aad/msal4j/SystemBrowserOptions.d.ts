import type { OpenBrowserAction } from '../../../../com/microsoft/aad/msal4j/OpenBrowserAction.d.ts'
import type { SystemBrowserOptions$SystemBrowserOptionsBuilder } from '../../../../com/microsoft/aad/msal4j/SystemBrowserOptions$SystemBrowserOptionsBuilder.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SystemBrowserOptions extends Object {
    static builder(): SystemBrowserOptions$SystemBrowserOptionsBuilder;
    private constructor(arg0: string, arg1: string, arg2: URI, arg3: URI, arg4: OpenBrowserAction)
    // private browserRedirectError: URI;
    // private browserRedirectSuccess: URI;
    // private htmlMessageError: string;
    // private htmlMessageSuccess: string;
    // private openBrowserAction: OpenBrowserAction;
    browserRedirectError(): URI;
    browserRedirectSuccess(): URI;
    htmlMessageError(): string;
    htmlMessageSuccess(): string;
    openBrowserAction(): OpenBrowserAction;
}