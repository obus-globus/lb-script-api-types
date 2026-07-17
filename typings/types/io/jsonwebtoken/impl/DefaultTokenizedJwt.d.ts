import type { JavaMap } from '../../../JavaMap.d.ts'
import type { TokenizedJwt } from '../../../io/jsonwebtoken/impl/TokenizedJwt.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class DefaultTokenizedJwt extends Object implements TokenizedJwt {
    constructor(arg0: CharSequence, arg1: CharSequence, arg2: CharSequence)
    readonly digest: CharSequence;
    readonly payload: CharSequence;
    // private protectedHeader: CharSequence;
    createHeader(arg0: JavaMap<string, Object | null>): JavaMap<any, any>;
    getDigest(): CharSequence;
    getPayload(): CharSequence;
    getProtected(): CharSequence;
}