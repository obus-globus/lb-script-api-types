import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class MatchingMode extends Enum<MatchingMode> {
    static fullmatch: MatchingMode;
    static match: MatchingMode;
    static search: MatchingMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MatchingMode;
    static values(): MatchingMode[];
    private constructor()
    name(): "search" | "match" | "fullmatch";
}