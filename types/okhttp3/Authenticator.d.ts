import type { Object } from '../java/lang/Object.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
import type { Route } from '../okhttp3/Route.d.ts'
export interface Authenticator extends Object{
    authenticate(route: Route | null, response: Response): Request | null;
}