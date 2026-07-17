import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class JNIExceptionWrapper$ExceptionKind extends Enum<JNIExceptionWrapper$ExceptionKind> {
    static RETURNED: JNIExceptionWrapper$ExceptionKind;
    static THROWN: JNIExceptionWrapper$ExceptionKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): JNIExceptionWrapper$ExceptionKind;
    static values(): JNIExceptionWrapper$ExceptionKind[];
    private constructor()
    name(): "RETURNED" | "THROWN";
}