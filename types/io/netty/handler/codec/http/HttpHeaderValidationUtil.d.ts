import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class HttpHeaderValidationUtil extends Object {
    static isConnectionHeader(paramarg0: CharSequence, paramarg1: boolean): boolean;
    static isTeNotTrailers(paramarg0: CharSequence, paramarg1: CharSequence): boolean;
    static validateToken(paramarg0: CharSequence): number;
    static validateValidHeaderValue(paramarg0: CharSequence): number;
    private constructor()
}