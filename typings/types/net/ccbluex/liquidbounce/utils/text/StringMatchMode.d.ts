import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { BiPredicate } from '../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * A mode for matching strings.
 *
 * The first argument is the source string, and the second argument is the target string to match against.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/utils/text/StringMatchMode.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/utils/text/StringMatchMode.kt:30}
 */
export class StringMatchMode extends Enum<StringMatchMode> implements BiPredicate<string, string>, Tagged {
    static CONTAINS: StringMatchMode;
    static CONTAINS_IGNORE_CASE: StringMatchMode;
    static Companion: Tagged$Companion;
    static ENDS_WITH: StringMatchMode;
    static ENDS_WITH_IGNORE_CASE: StringMatchMode;
    static EQUALS: StringMatchMode;
    static EQUALS_IGNORE_CASE: StringMatchMode;
    static STARTS_WITH: StringMatchMode;
    static STARTS_WITH_IGNORE_CASE: StringMatchMode;
    static getEntries(): StringMatchMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): StringMatchMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    and(arg0: (param0: string, param1: string) => boolean): (param0: string, param1: string) => boolean;
    negate(): (param0: string, param1: string) => boolean;
    or(arg0: (param0: string, param1: string) => boolean): (param0: string, param1: string) => boolean;
    name(): "EQUALS" | "EQUALS_IGNORE_CASE" | "CONTAINS" | "CONTAINS_IGNORE_CASE" | "STARTS_WITH" | "STARTS_WITH_IGNORE_CASE" | "ENDS_WITH" | "ENDS_WITH_IGNORE_CASE";
}