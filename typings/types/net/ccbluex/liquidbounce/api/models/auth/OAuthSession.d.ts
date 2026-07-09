import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ExpiryValue } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/ExpiryValue.d.ts'
/**
 * Contains the access token and the refresh token.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/api/models/auth/OAuthSession.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/api/models/auth/OAuthSession.kt:26}
 */
export class OAuthSession extends Object {
    constructor(accessToken: ExpiryValue<string>, refreshToken: string)
    accessToken: ExpiryValue<string>;
    readonly refreshToken: string;
    component1(): ExpiryValue<string>;
    component2(): string;
    copy(accessToken: ExpiryValue<string>, refreshToken: string): OAuthSession;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}