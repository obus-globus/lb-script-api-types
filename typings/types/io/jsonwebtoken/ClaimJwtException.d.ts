import type { JavaMap } from '../../JavaMap.d.ts'
import type { JwtException } from '../../io/jsonwebtoken/JwtException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export abstract class ClaimJwtException extends JwtException {
    static INCORRECT_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    static MISSING_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    constructor(arg0: JavaMap<any, any>, arg1: JavaMap<any, any>, arg2: string)
    constructor(arg0: JavaMap<any, any>, arg1: JavaMap<any, any>, arg2: string, arg3: Throwable)
    readonly claims: JavaMap<any, any>;
    readonly header: JavaMap<any, any>;
    getClaims(): JavaMap<any, any>;
    getHeader(): JavaMap<any, any>;
}