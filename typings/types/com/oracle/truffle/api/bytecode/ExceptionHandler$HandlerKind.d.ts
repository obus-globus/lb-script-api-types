import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ExceptionHandler$HandlerKind extends Enum<ExceptionHandler$HandlerKind> {
    static CUSTOM: ExceptionHandler$HandlerKind;
    static EPILOG: ExceptionHandler$HandlerKind;
    static TAG: ExceptionHandler$HandlerKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ExceptionHandler$HandlerKind;
    static values(): (Object | null)[];
    private constructor()
    name(): "CUSTOM" | "TAG" | "EPILOG";
}