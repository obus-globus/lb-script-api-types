import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { Challenge } from '../../../okhttp3/Challenge.d.ts'
import type { CookieJar } from '../../../okhttp3/CookieJar.d.ts'
import type { HttpUrl } from '../../../okhttp3/HttpUrl.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
export class HttpHeaders extends Object {
    static hasBody(response: Response): boolean;
    static parseChallenges(self: Pair<string, string>[], headerName: string): Challenge[];
    static promisesBody(self: Response): boolean;
    static receiveHeaders(self: CookieJar, url: HttpUrl, headers: Pair<string, string>[]): void;
}