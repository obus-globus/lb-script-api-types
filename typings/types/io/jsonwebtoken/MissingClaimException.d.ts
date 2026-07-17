import type { JavaMap } from '../../JavaMap.d.ts'
import type { InvalidClaimException } from '../../io/jsonwebtoken/InvalidClaimException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class MissingClaimException extends InvalidClaimException {
    static INCORRECT_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    static MISSING_EXPECTED_CLAIM_MESSAGE_TEMPLATE: string;
    constructor(arg0: JavaMap<any, any>, arg1: JavaMap<any, any>, arg2: string, arg3: Object, arg4: string)
    constructor(arg0: JavaMap<any, any>, arg1: JavaMap<any, any>, arg2: string, arg3: Object, arg4: string, arg5: Throwable)
}