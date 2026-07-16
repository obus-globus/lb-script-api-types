import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PositionAssertion$Type extends Enum<PositionAssertion$Type> {
    static CARET: PositionAssertion$Type;
    static DOLLAR: PositionAssertion$Type;
    static MATCH_BEGIN: PositionAssertion$Type;
    static MATCH_END: PositionAssertion$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PositionAssertion$Type;
    static values(): PositionAssertion$Type[];
    private constructor()
    name(): "CARET" | "DOLLAR" | "MATCH_BEGIN" | "MATCH_END";
}