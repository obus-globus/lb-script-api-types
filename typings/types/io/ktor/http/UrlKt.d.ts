import type { Url } from '../../../io/ktor/http/Url.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class UrlKt extends Object {
    static getAuthority(paramarg0: Url): string;
    static getEncodedUserAndPassword(paramarg0: Url): string;
    static getProtocolWithAuthority(paramarg0: Url): string;
}