import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CaseTree$CaseKind extends Enum<CaseTree$CaseKind> {
    static RULE: CaseTree$CaseKind;
    static STATEMENT: CaseTree$CaseKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CaseTree$CaseKind;
    static values(): CaseTree$CaseKind[];
    private constructor()
    name(): "STATEMENT" | "RULE";
}