import type { ClaimJwtException } from '../../io/jsonwebtoken/ClaimJwtException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class PrematureJwtException extends ClaimJwtException {
    static INCORRECT_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    static MISSING_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    constructor(arg0: { [key: string]: any }, arg1: { [key: string]: any }, arg2: string)
    constructor(arg0: { [key: string]: any }, arg1: { [key: string]: any }, arg2: string, arg3: Throwable)
}