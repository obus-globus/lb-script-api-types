import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class MethodHandleImpl$Intrinsic extends Enum<MethodHandleImpl$Intrinsic> {
    static ARRAY_LENGTH: MethodHandleImpl$Intrinsic;
    static ARRAY_LOAD: MethodHandleImpl$Intrinsic;
    static ARRAY_STORE: MethodHandleImpl$Intrinsic;
    static GUARD_WITH_CATCH: MethodHandleImpl$Intrinsic;
    static IDENTITY: MethodHandleImpl$Intrinsic;
    static LOOP: MethodHandleImpl$Intrinsic;
    static NONE: MethodHandleImpl$Intrinsic;
    static SELECT_ALTERNATIVE: MethodHandleImpl$Intrinsic;
    static TABLE_SWITCH: MethodHandleImpl$Intrinsic;
    static TRY_FINALLY: MethodHandleImpl$Intrinsic;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MethodHandleImpl$Intrinsic;
    static values(): MethodHandleImpl$Intrinsic[];
    private constructor()
    name(): "SELECT_ALTERNATIVE" | "GUARD_WITH_CATCH" | "TRY_FINALLY" | "TABLE_SWITCH" | "LOOP" | "ARRAY_LOAD" | "ARRAY_STORE" | "ARRAY_LENGTH" | "IDENTITY" | "NONE";
}