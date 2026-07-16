import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MatchResult extends Enum<MatchResult> {
    static EXACT_MATCH: MatchResult;
    static MATCH: MatchResult;
    static NONE: MatchResult;
    static WEAK: MatchResult;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MatchResult;
    static values(): MatchResult[];
    private constructor()
    isAtLeast(arg0: MatchResult): boolean;
    isExactMatch(): boolean;
    isMatch(): boolean;
    name(): "NONE" | "WEAK" | "MATCH" | "EXACT_MATCH";
}