import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ExceptionHandler$HandlerKind extends Enum<ExceptionHandler$HandlerKind> {
    static CUSTOM: ExceptionHandler$HandlerKind;
    static EPILOG: ExceptionHandler$HandlerKind;
    static TAG: ExceptionHandler$HandlerKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ExceptionHandler$HandlerKind;
    static values(): ExceptionHandler$HandlerKind[];
    private constructor()
    name(): "CUSTOM" | "TAG" | "EPILOG";
}