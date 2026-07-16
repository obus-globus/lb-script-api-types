import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RuleType extends Enum<RuleType> {
    static APPROX: RuleType;
    static EXACT: RuleType;
    static RULES: RuleType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RuleType;
    static values(): RuleType[];
    private constructor(arg2: string)
    getName(): string;
    name(): "APPROX" | "EXACT" | "RULES";
}