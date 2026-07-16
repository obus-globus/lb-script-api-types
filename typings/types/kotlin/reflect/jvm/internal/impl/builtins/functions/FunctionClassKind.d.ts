import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { FunctionClassKind$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionClassKind$Companion.d.ts'
export class FunctionClassKind extends Enum<FunctionClassKind> {
    static Companion: FunctionClassKind$Companion;
    static Function: FunctionClassKind;
    static KFunction: FunctionClassKind;
    static KSuspendFunction: FunctionClassKind;
    static SuspendFunction: FunctionClassKind;
    static UNKNOWN: FunctionClassKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FunctionClassKind;
    static values(): FunctionClassKind[];
    private constructor()
    name(): "Function" | "SuspendFunction" | "KFunction" | "KSuspendFunction" | "UNKNOWN";
}