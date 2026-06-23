import type { JwtException } from '../../io/jsonwebtoken/JwtException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export abstract class ClaimJwtException extends JwtException {
    static INCORRECT_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    static MISSING_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    constructor(arg0: { [key: string]: any }, arg1: { [key: string]: any }, arg2: string)
    constructor(arg0: { [key: string]: any }, arg1: { [key: string]: any }, arg2: string, arg3: Throwable)
    readonly claims: { [key: string]: any };
    readonly header: { [key: string]: any };
    getClaims(): { [key: string]: any };
    getHeader(): { [key: string]: any };
}