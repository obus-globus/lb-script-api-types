import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class StaticUnicodeSets$Key extends Enum<StaticUnicodeSets$Key> {
    static ALL_SEPARATORS: StaticUnicodeSets$Key;
    static APOSTROPHE_SIGN: StaticUnicodeSets$Key;
    static APPROXIMATELY_SIGN: StaticUnicodeSets$Key;
    static COMMA: StaticUnicodeSets$Key;
    static DEFAULT_IGNORABLES: StaticUnicodeSets$Key;
    static DIGITS: StaticUnicodeSets$Key;
    static DIGITS_OR_ALL_SEPARATORS: StaticUnicodeSets$Key;
    static DIGITS_OR_STRICT_ALL_SEPARATORS: StaticUnicodeSets$Key;
    static DOLLAR_SIGN: StaticUnicodeSets$Key;
    static EMPTY: StaticUnicodeSets$Key;
    static INFINITY_SIGN: StaticUnicodeSets$Key;
    static MINUS_SIGN: StaticUnicodeSets$Key;
    static OTHER_GROUPING_SEPARATORS: StaticUnicodeSets$Key;
    static PERCENT_SIGN: StaticUnicodeSets$Key;
    static PERIOD: StaticUnicodeSets$Key;
    static PERMILLE_SIGN: StaticUnicodeSets$Key;
    static PLUS_SIGN: StaticUnicodeSets$Key;
    static POUND_SIGN: StaticUnicodeSets$Key;
    static RUPEE_SIGN: StaticUnicodeSets$Key;
    static STRICT_ALL_SEPARATORS: StaticUnicodeSets$Key;
    static STRICT_COMMA: StaticUnicodeSets$Key;
    static STRICT_IGNORABLES: StaticUnicodeSets$Key;
    static STRICT_PERIOD: StaticUnicodeSets$Key;
    static WON_SIGN: StaticUnicodeSets$Key;
    static YEN_SIGN: StaticUnicodeSets$Key;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StaticUnicodeSets$Key;
    static values(): StaticUnicodeSets$Key[];
    private constructor()
    name(): "EMPTY" | "DEFAULT_IGNORABLES" | "STRICT_IGNORABLES" | "COMMA" | "PERIOD" | "STRICT_COMMA" | "STRICT_PERIOD" | "APOSTROPHE_SIGN" | "OTHER_GROUPING_SEPARATORS" | "ALL_SEPARATORS" | "STRICT_ALL_SEPARATORS" | "MINUS_SIGN" | "PLUS_SIGN" | "PERCENT_SIGN" | "PERMILLE_SIGN" | "INFINITY_SIGN" | "APPROXIMATELY_SIGN" | "DOLLAR_SIGN" | "POUND_SIGN" | "RUPEE_SIGN" | "YEN_SIGN" | "WON_SIGN" | "DIGITS" | "DIGITS_OR_ALL_SEPARATORS" | "DIGITS_OR_STRICT_ALL_SEPARATORS";
}