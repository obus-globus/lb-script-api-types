import type { Escaper } from '../../../../com/google/common/escape/Escaper.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UrlEscapers extends Object {
    static urlFormParameterEscaper(): Escaper;
    static urlFragmentEscaper(): Escaper;
    static urlPathSegmentEscaper(): Escaper;
    private constructor()
}