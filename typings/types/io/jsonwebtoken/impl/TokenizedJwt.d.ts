import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export interface TokenizedJwt extends Object{
    createHeader(arg0: JavaMap<string, Object | null>): JavaMap<any, any>;
    getDigest(): CharSequence;
    getPayload(): CharSequence;
    getProtected(): CharSequence;
}