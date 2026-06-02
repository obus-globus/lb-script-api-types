import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PositionAssertion$Type extends Enum<PositionAssertion$Type> {
    static CARET: PositionAssertion$Type;
    static DOLLAR: PositionAssertion$Type;
    static MATCH_BEGIN: PositionAssertion$Type;
    static MATCH_END: PositionAssertion$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PositionAssertion$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "CARET" | "DOLLAR" | "MATCH_BEGIN" | "MATCH_END";
}