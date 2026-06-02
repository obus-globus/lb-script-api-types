import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { Challenge } from '../../../okhttp3/Challenge.d.ts'
import type { CookieJar } from '../../../okhttp3/CookieJar.d.ts'
import type { HttpUrl } from '../../../okhttp3/HttpUrl.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
export class HttpHeaders extends Object {
    static hasBody(paramarg0: Response): boolean;
    static parseChallenges(paramarg0: Pair<string, string>[], paramarg1: string): Challenge[];
    static promisesBody(paramarg0: Response): boolean;
    static receiveHeaders(paramarg0: CookieJar, paramarg1: HttpUrl, paramarg2: Pair<string, string>[]): void;
}