import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BaseContinuationImpl } from '../../../../kotlin/coroutines/jvm/internal/BaseContinuationImpl.d.ts'
export class DebugMetadataKt extends Object {
    static getNextLineNumber(paramarg0: BaseContinuationImpl): number;
    static getSpilledVariableFieldMapping(paramarg0: BaseContinuationImpl): (Object | null)[];
    static getStackTraceElement(paramarg0: BaseContinuationImpl): StackTraceElement;
}