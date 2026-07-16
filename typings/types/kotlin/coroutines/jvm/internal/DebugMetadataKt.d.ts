import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BaseContinuationImpl } from '../../../../kotlin/coroutines/jvm/internal/BaseContinuationImpl.d.ts'
export class DebugMetadataKt extends Object {
    static getNextLineNumber(self: BaseContinuationImpl): number;
    static getSpilledVariableFieldMapping(self: BaseContinuationImpl): string[] | null;
    static getStackTraceElement(self: BaseContinuationImpl): StackTraceElement | null;
}