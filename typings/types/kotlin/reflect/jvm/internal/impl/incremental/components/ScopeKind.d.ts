import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ScopeKind extends Enum<ScopeKind> {
    static CLASSIFIER: ScopeKind;
    static PACKAGE: ScopeKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ScopeKind;
    static values(): ScopeKind[];
    private constructor()
    name(): "PACKAGE" | "CLASSIFIER";
}