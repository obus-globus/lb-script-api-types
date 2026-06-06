import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RuleType extends Enum<RuleType> {
    static APPROX: RuleType;
    static EXACT: RuleType;
    static RULES: RuleType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RuleType;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    getName(): string;
    name(): "APPROX" | "EXACT" | "RULES";
}