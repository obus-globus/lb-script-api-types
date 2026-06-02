import type { ClaimJwtException } from '../../io/jsonwebtoken/ClaimJwtException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class ExpiredJwtException extends ClaimJwtException {
    static INCORRECT_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    static MISSING_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    constructor(arg0: Header, arg1: Claims, arg2: string)
    constructor(arg0: Header, arg1: Claims, arg2: string, arg3: Throwable)
}