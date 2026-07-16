import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ErrorScopeKind extends Enum<ErrorScopeKind> {
    static CAPTURED_TYPE_SCOPE: ErrorScopeKind;
    static ERASED_RECEIVER_TYPE_SCOPE: ErrorScopeKind;
    static ERROR_TYPE_SCOPE: ErrorScopeKind;
    static INTEGER_LITERAL_TYPE_SCOPE: ErrorScopeKind;
    static NON_CLASSIFIER_SUPER_TYPE_SCOPE: ErrorScopeKind;
    static SCOPE_FOR_ABBREVIATION_TYPE: ErrorScopeKind;
    static SCOPE_FOR_ERROR_CLASS: ErrorScopeKind;
    static SCOPE_FOR_ERROR_RESOLUTION_CANDIDATE: ErrorScopeKind;
    static STUB_TYPE_SCOPE: ErrorScopeKind;
    static UNSUPPORTED_TYPE_SCOPE: ErrorScopeKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ErrorScopeKind;
    static values(): ErrorScopeKind[];
    private constructor(arg2: string)
    readonly debugMessage: string;
    getDebugMessage(): string;
    name(): "CAPTURED_TYPE_SCOPE" | "INTEGER_LITERAL_TYPE_SCOPE" | "ERASED_RECEIVER_TYPE_SCOPE" | "SCOPE_FOR_ABBREVIATION_TYPE" | "STUB_TYPE_SCOPE" | "NON_CLASSIFIER_SUPER_TYPE_SCOPE" | "ERROR_TYPE_SCOPE" | "UNSUPPORTED_TYPE_SCOPE" | "SCOPE_FOR_ERROR_CLASS" | "SCOPE_FOR_ERROR_RESOLUTION_CANDIDATE";
}