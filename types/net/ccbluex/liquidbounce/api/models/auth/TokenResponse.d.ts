import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OAuthSession } from '../../../../../../net/ccbluex/liquidbounce/api/models/auth/OAuthSession.d.ts'
export class TokenResponse extends Object {
    constructor(accessToken: string, expiresIn: number, refreshToken: string | null)
    readonly accessToken: string;
    readonly expiresIn: number;
    readonly refreshToken: string | null;
    component1(): string;
    component2(): number;
    component3(): string | null;
    copy(accessToken: string, expiresIn: number, refreshToken: string | null): TokenResponse;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toAuthSession(): OAuthSession;
    toString(): string;
}