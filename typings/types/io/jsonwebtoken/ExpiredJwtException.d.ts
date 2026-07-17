import type { JavaMap } from '../../JavaMap.d.ts'
import type { ClaimJwtException } from '../../io/jsonwebtoken/ClaimJwtException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class ExpiredJwtException extends ClaimJwtException {
    static INCORRECT_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    static MISSING_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    constructor(arg0: JavaMap<any, any>, arg1: JavaMap<any, any>, arg2: string)
    constructor(arg0: JavaMap<any, any>, arg1: JavaMap<any, any>, arg2: string, arg3: Throwable)
}