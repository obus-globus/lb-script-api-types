import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HttpRequest$FollowRedirects extends Enum<HttpRequest$FollowRedirects> {
    static FOLLOW: HttpRequest$FollowRedirects;
    static IGNORE: HttpRequest$FollowRedirects;
    static NOT_SET: HttpRequest$FollowRedirects;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HttpRequest$FollowRedirects;
    static values(): HttpRequest$FollowRedirects[];
    private constructor()
    name(): "NOT_SET" | "FOLLOW" | "IGNORE";
}