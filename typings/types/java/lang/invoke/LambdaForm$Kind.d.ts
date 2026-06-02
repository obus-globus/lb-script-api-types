import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class LambdaForm$Kind extends Enum<LambdaForm$Kind> {
    static BOUND_REINVOKER: LambdaForm$Kind;
    static COLLECTOR: LambdaForm$Kind;
    static CONSTANT: LambdaForm$Kind;
    static DELEGATE: LambdaForm$Kind;
    static DIRECT_INVOKE_INTERFACE: LambdaForm$Kind;
    static DIRECT_INVOKE_SPECIAL: LambdaForm$Kind;
    static DIRECT_INVOKE_SPECIAL_IFC: LambdaForm$Kind;
    static DIRECT_INVOKE_STATIC: LambdaForm$Kind;
    static DIRECT_INVOKE_STATIC_INIT: LambdaForm$Kind;
    static DIRECT_INVOKE_VIRTUAL: LambdaForm$Kind;
    static DIRECT_NEW_INVOKE_SPECIAL: LambdaForm$Kind;
    static EXACT_INVOKER: LambdaForm$Kind;
    static EXACT_LINKER: LambdaForm$Kind;
    static FIELD_ACCESS: LambdaForm$Kind;
    static FIELD_ACCESS_B: LambdaForm$Kind;
    static FIELD_ACCESS_C: LambdaForm$Kind;
    static FIELD_ACCESS_CAST: LambdaForm$Kind;
    static FIELD_ACCESS_INIT: LambdaForm$Kind;
    static FIELD_ACCESS_INIT_B: LambdaForm$Kind;
    static FIELD_ACCESS_INIT_C: LambdaForm$Kind;
    static FIELD_ACCESS_INIT_CAST: LambdaForm$Kind;
    static FIELD_ACCESS_INIT_S: LambdaForm$Kind;
    static FIELD_ACCESS_INIT_Z: LambdaForm$Kind;
    static FIELD_ACCESS_S: LambdaForm$Kind;
    static FIELD_ACCESS_Z: LambdaForm$Kind;
    static GENERIC: LambdaForm$Kind;
    static GENERIC_INVOKER: LambdaForm$Kind;
    static GENERIC_LINKER: LambdaForm$Kind;
    static GUARD: LambdaForm$Kind;
    static GUARD_WITH_CATCH: LambdaForm$Kind;
    static IDENTITY: LambdaForm$Kind;
    static LINK_TO_CALL_SITE: LambdaForm$Kind;
    static LINK_TO_TARGET_METHOD: LambdaForm$Kind;
    static LOOP: LambdaForm$Kind;
    static REINVOKER: LambdaForm$Kind;
    static TABLE_SWITCH: LambdaForm$Kind;
    static TRY_FINALLY: LambdaForm$Kind;
    static VARHANDLE_EXACT_INVOKER: LambdaForm$Kind;
    static VARHANDLE_INVOKER: LambdaForm$Kind;
    static VARHANDLE_LINKER: LambdaForm$Kind;
    static VOLATILE_FIELD_ACCESS: LambdaForm$Kind;
    static VOLATILE_FIELD_ACCESS_B: LambdaForm$Kind;
    static VOLATILE_FIELD_ACCESS_C: LambdaForm$Kind;
    static VOLATILE_FIELD_ACCESS_CAST: LambdaForm$Kind;
    static VOLATILE_FIELD_ACCESS_INIT: LambdaForm$Kind;
    static VOLATILE_FIELD_ACCESS_INIT_B: LambdaForm$Kind;
    static VOLATILE_FIELD_ACCESS_INIT_C: LambdaForm$Kind;
    static VOLATILE_FIELD_ACCESS_INIT_CAST: LambdaForm$Kind;
    static VOLATILE_FIELD_ACCESS_INIT_S: LambdaForm$Kind;
    static VOLATILE_FIELD_ACCESS_INIT_Z: LambdaForm$Kind;
    static VOLATILE_FIELD_ACCESS_S: LambdaForm$Kind;
    static VOLATILE_FIELD_ACCESS_Z: LambdaForm$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LambdaForm$Kind;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    private constructor(arg2: string, arg3: string)
    // private defaultLambdaName: string;
    // private methodName: string;
    name(): "GENERIC" | "IDENTITY" | "CONSTANT" | "BOUND_REINVOKER" | "REINVOKER" | "DELEGATE" | "EXACT_LINKER" | "EXACT_INVOKER" | "GENERIC_LINKER" | "GENERIC_INVOKER" | "LINK_TO_TARGET_METHOD" | "LINK_TO_CALL_SITE" | "DIRECT_INVOKE_VIRTUAL" | "DIRECT_INVOKE_SPECIAL" | "DIRECT_INVOKE_SPECIAL_IFC" | "DIRECT_INVOKE_STATIC" | "DIRECT_NEW_INVOKE_SPECIAL" | "DIRECT_INVOKE_INTERFACE" | "DIRECT_INVOKE_STATIC_INIT" | "FIELD_ACCESS" | "FIELD_ACCESS_INIT" | "VOLATILE_FIELD_ACCESS" | "VOLATILE_FIELD_ACCESS_INIT" | "FIELD_ACCESS_B" | "FIELD_ACCESS_INIT_B" | "VOLATILE_FIELD_ACCESS_B" | "VOLATILE_FIELD_ACCESS_INIT_B" | "FIELD_ACCESS_C" | "FIELD_ACCESS_INIT_C" | "VOLATILE_FIELD_ACCESS_C" | "VOLATILE_FIELD_ACCESS_INIT_C" | "FIELD_ACCESS_S" | "FIELD_ACCESS_INIT_S" | "VOLATILE_FIELD_ACCESS_S" | "VOLATILE_FIELD_ACCESS_INIT_S" | "FIELD_ACCESS_Z" | "FIELD_ACCESS_INIT_Z" | "VOLATILE_FIELD_ACCESS_Z" | "VOLATILE_FIELD_ACCESS_INIT_Z" | "FIELD_ACCESS_CAST" | "FIELD_ACCESS_INIT_CAST" | "VOLATILE_FIELD_ACCESS_CAST" | "VOLATILE_FIELD_ACCESS_INIT_CAST" | "TRY_FINALLY" | "TABLE_SWITCH" | "COLLECTOR" | "LOOP" | "GUARD" | "GUARD_WITH_CATCH" | "VARHANDLE_EXACT_INVOKER" | "VARHANDLE_INVOKER" | "VARHANDLE_LINKER";
}