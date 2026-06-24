import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ExpiryValue } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/ExpiryValue.d.ts'
/**
 * Contains the access token and the refresh token.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/api/models/auth/OAuthSession.kt#L23 | src/main/kotlin/net/ccbluex/liquidbounce/api/models/auth/OAuthSession.kt:23}
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