import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CEntryPoint$Builtin extends Enum<CEntryPoint$Builtin> {
    static ATTACH_THREAD: CEntryPoint$Builtin;
    static CREATE_ISOLATE: CEntryPoint$Builtin;
    static DETACH_THREAD: CEntryPoint$Builtin;
    static GET_CURRENT_THREAD: CEntryPoint$Builtin;
    static GET_ISOLATE: CEntryPoint$Builtin;
    static NO_BUILTIN: CEntryPoint$Builtin;
    static TEAR_DOWN_ISOLATE: CEntryPoint$Builtin;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CEntryPoint$Builtin;
    static values(): CEntryPoint$Builtin[];
    private constructor()
    name(): "NO_BUILTIN" | "CREATE_ISOLATE" | "ATTACH_THREAD" | "GET_CURRENT_THREAD" | "GET_ISOLATE" | "DETACH_THREAD" | "TEAR_DOWN_ISOLATE";
}