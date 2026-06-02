import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class IDNA$Error extends Enum<IDNA$Error> {
    static BIDI: IDNA$Error;
    static CONTEXTJ: IDNA$Error;
    static CONTEXTO_DIGITS: IDNA$Error;
    static CONTEXTO_PUNCTUATION: IDNA$Error;
    static DISALLOWED: IDNA$Error;
    static DOMAIN_NAME_TOO_LONG: IDNA$Error;
    static EMPTY_LABEL: IDNA$Error;
    static HYPHEN_3_4: IDNA$Error;
    static INVALID_ACE_LABEL: IDNA$Error;
    static LABEL_HAS_DOT: IDNA$Error;
    static LABEL_TOO_LONG: IDNA$Error;
    static LEADING_COMBINING_MARK: IDNA$Error;
    static LEADING_HYPHEN: IDNA$Error;
    static PUNYCODE: IDNA$Error;
    static TRAILING_HYPHEN: IDNA$Error;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): IDNA$Error;
    static values(): (Object | null)[];
    private constructor()
    name(): "EMPTY_LABEL" | "LABEL_TOO_LONG" | "DOMAIN_NAME_TOO_LONG" | "LEADING_HYPHEN" | "TRAILING_HYPHEN" | "HYPHEN_3_4" | "LEADING_COMBINING_MARK" | "DISALLOWED" | "PUNYCODE" | "LABEL_HAS_DOT" | "INVALID_ACE_LABEL" | "BIDI" | "CONTEXTJ" | "CONTEXTO_PUNCTUATION" | "CONTEXTO_DIGITS";
}