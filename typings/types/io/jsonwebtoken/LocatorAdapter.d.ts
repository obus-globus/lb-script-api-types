import type { Locator } from '../../io/jsonwebtoken/Locator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class LocatorAdapter<T extends Object | number | string | boolean> extends Object implements Locator<T> {
    constructor()
    doLocate(arg0: Header): T;
    locate(arg0: Header): T;
    locate(arg0: JweHeader): T;
    locate(arg0: JwsHeader): T;
    locate(arg0: ProtectedHeader): T;
}