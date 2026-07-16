import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LibGraalScope$DetachAction extends Enum<LibGraalScope$DetachAction> {
    static DETACH: LibGraalScope$DetachAction;
    static DETACH_RUNTIME: LibGraalScope$DetachAction;
    static DETACH_RUNTIME_AND_RELEASE: LibGraalScope$DetachAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LibGraalScope$DetachAction;
    static values(): LibGraalScope$DetachAction[];
    private constructor()
    name(): "DETACH" | "DETACH_RUNTIME" | "DETACH_RUNTIME_AND_RELEASE";
}