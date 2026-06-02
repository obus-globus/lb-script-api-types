import type { URLConnection } from '../../../../../../java/net/URLConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface AuthorizationProvider extends Object{
    addAuthorization(urlConnection: URLConnection): void;
}