import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { DebugCoroutineInfoImpl } from '../../../../kotlinx/coroutines/debug/internal/DebugCoroutineInfoImpl.d.ts'
export class DebuggerInfo extends Object implements Serializable {
    constructor(source: DebugCoroutineInfoImpl, context: CoroutineContext)
    readonly coroutineId: number | null;
    readonly dispatcher: string | null;
    readonly lastObservedStackTrace: StackTraceElement[];
    readonly lastObservedThreadName: string | null;
    readonly lastObservedThreadState: string | null;
    readonly name: string | null;
    readonly sequenceNumber: number;
    readonly state: string;
}