import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RegexLexer$ClassSetOperator extends Enum<RegexLexer$ClassSetOperator> {
    static Difference: RegexLexer$ClassSetOperator;
    static Intersection: RegexLexer$ClassSetOperator;
    static Union: RegexLexer$ClassSetOperator;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RegexLexer$ClassSetOperator;
    static values(): RegexLexer$ClassSetOperator[];
    private constructor(repr: string)
    // private repr: string;
    toString(): string;
    name(): "Union" | "Intersection" | "Difference";
}