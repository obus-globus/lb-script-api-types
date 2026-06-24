import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CaseTree$CaseKind extends Enum<CaseTree$CaseKind> {
    static RULE: CaseTree$CaseKind;
    static STATEMENT: CaseTree$CaseKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CaseTree$CaseKind;
    static values(): (Object | null)[];
    private constructor()
    name(): "STATEMENT" | "RULE";
}