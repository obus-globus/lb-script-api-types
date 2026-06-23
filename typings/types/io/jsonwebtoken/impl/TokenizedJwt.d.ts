import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export interface TokenizedJwt extends Object{
    createHeader(arg0: { [key: string]: Object | null }): { [key: string]: any };
    getDigest(): CharSequence;
    getPayload(): CharSequence;
    getProtected(): CharSequence;
}