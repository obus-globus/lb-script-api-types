import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ErrorEntity extends Enum<ErrorEntity> {
    static ERROR_CLASS: ErrorEntity;
    static ERROR_FUNCTION: ErrorEntity;
    static ERROR_MODULE: ErrorEntity;
    static ERROR_PROPERTY: ErrorEntity;
    static ERROR_SCOPE: ErrorEntity;
    static ERROR_TYPE: ErrorEntity;
    static PARENT_OF_ERROR_SCOPE: ErrorEntity;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ErrorEntity;
    static values(): ErrorEntity[];
    private constructor(arg2: string)
    readonly debugText: string;
    getDebugText(): string;
    name(): "ERROR_CLASS" | "ERROR_FUNCTION" | "ERROR_SCOPE" | "ERROR_MODULE" | "ERROR_PROPERTY" | "ERROR_TYPE" | "PARENT_OF_ERROR_SCOPE";
}