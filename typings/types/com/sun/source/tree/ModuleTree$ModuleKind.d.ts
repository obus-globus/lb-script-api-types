import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ModuleTree$ModuleKind extends Enum<ModuleTree$ModuleKind> {
    static OPEN: ModuleTree$ModuleKind;
    static STRONG: ModuleTree$ModuleKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ModuleTree$ModuleKind;
    static values(): ModuleTree$ModuleKind[];
    private constructor()
    name(): "OPEN" | "STRONG";
}