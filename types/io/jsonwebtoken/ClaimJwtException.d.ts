import type { JwtException } from '../../io/jsonwebtoken/JwtException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export abstract class ClaimJwtException extends JwtException {
    static INCORRECT_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    static MISSING_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    constructor(arg0: Header, arg1: Claims, arg2: string)
    constructor(arg0: Header, arg1: Claims, arg2: string, arg3: Throwable)
    readonly claims: Claims;
    readonly header: Header;
    getClaims(): Claims;
    getHeader(): Header;
}