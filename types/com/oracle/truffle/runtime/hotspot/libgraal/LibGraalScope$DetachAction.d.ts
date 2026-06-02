import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LibGraalScope$DetachAction extends Enum<LibGraalScope$DetachAction> {
    static DETACH: LibGraalScope$DetachAction;
    static DETACH_RUNTIME: LibGraalScope$DetachAction;
    static DETACH_RUNTIME_AND_RELEASE: LibGraalScope$DetachAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LibGraalScope$DetachAction;
    static values(): (Object | null)[];
    private constructor()
    name(): "DETACH" | "DETACH_RUNTIME" | "DETACH_RUNTIME_AND_RELEASE";
}