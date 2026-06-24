import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ModuleTree$ModuleKind extends Enum<ModuleTree$ModuleKind> {
    static OPEN: ModuleTree$ModuleKind;
    static STRONG: ModuleTree$ModuleKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleTree$ModuleKind;
    static values(): (Object | null)[];
    private constructor()
    name(): "OPEN" | "STRONG";
}