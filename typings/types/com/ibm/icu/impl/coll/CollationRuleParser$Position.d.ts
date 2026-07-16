import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CollationRuleParser$Position extends Enum<CollationRuleParser$Position> {
    static FIRST_IMPLICIT: CollationRuleParser$Position;
    static FIRST_PRIMARY_IGNORABLE: CollationRuleParser$Position;
    static FIRST_REGULAR: CollationRuleParser$Position;
    static FIRST_SECONDARY_IGNORABLE: CollationRuleParser$Position;
    static FIRST_TERTIARY_IGNORABLE: CollationRuleParser$Position;
    static FIRST_TRAILING: CollationRuleParser$Position;
    static FIRST_VARIABLE: CollationRuleParser$Position;
    static LAST_IMPLICIT: CollationRuleParser$Position;
    static LAST_PRIMARY_IGNORABLE: CollationRuleParser$Position;
    static LAST_REGULAR: CollationRuleParser$Position;
    static LAST_SECONDARY_IGNORABLE: CollationRuleParser$Position;
    static LAST_TERTIARY_IGNORABLE: CollationRuleParser$Position;
    static LAST_TRAILING: CollationRuleParser$Position;
    static LAST_VARIABLE: CollationRuleParser$Position;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CollationRuleParser$Position;
    static values(): CollationRuleParser$Position[];
    private constructor()
    name(): "FIRST_TERTIARY_IGNORABLE" | "LAST_TERTIARY_IGNORABLE" | "FIRST_SECONDARY_IGNORABLE" | "LAST_SECONDARY_IGNORABLE" | "FIRST_PRIMARY_IGNORABLE" | "LAST_PRIMARY_IGNORABLE" | "FIRST_VARIABLE" | "LAST_VARIABLE" | "FIRST_REGULAR" | "LAST_REGULAR" | "FIRST_IMPLICIT" | "LAST_IMPLICIT" | "FIRST_TRAILING" | "LAST_TRAILING";
}