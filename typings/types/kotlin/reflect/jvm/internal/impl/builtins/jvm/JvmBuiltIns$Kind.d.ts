import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class JvmBuiltIns$Kind extends Enum<JvmBuiltIns$Kind> {
    static FALLBACK: JvmBuiltIns$Kind;
    static FROM_CLASS_LOADER: JvmBuiltIns$Kind;
    static FROM_DEPENDENCIES: JvmBuiltIns$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): JvmBuiltIns$Kind;
    static values(): JvmBuiltIns$Kind[];
    private constructor()
    name(): "FROM_DEPENDENCIES" | "FROM_CLASS_LOADER" | "FALLBACK";
}