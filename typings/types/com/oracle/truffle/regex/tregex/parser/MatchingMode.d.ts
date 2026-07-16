import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MatchingMode extends Enum<MatchingMode> {
    static fullmatch: MatchingMode;
    static match: MatchingMode;
    static search: MatchingMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MatchingMode;
    static values(): MatchingMode[];
    private constructor()
    name(): "search" | "match" | "fullmatch";
}