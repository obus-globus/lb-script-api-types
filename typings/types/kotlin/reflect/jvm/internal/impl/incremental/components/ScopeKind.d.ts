import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ScopeKind extends Enum<ScopeKind> {
    static CLASSIFIER: ScopeKind;
    static PACKAGE: ScopeKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ScopeKind;
    static values(): (Object | null)[];
    private constructor()
    name(): "PACKAGE" | "CLASSIFIER";
}