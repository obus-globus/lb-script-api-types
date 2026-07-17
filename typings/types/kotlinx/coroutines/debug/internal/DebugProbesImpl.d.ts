import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { PrintStream } from '../../../../java/io/PrintStream.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { SimpleDateFormat } from '../../../../java/text/SimpleDateFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../kotlin/Pair.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineStackFrame } from '../../../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
import type { AtomicInt } from '../../../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
import type { DebugCoroutineInfo } from '../../../../kotlinx/coroutines/debug/internal/DebugCoroutineInfo.d.ts'
import type { DebugCoroutineInfoImpl } from '../../../../kotlinx/coroutines/debug/internal/DebugCoroutineInfoImpl.d.ts'
import type { DebugProbesImpl$CoroutineOwner } from '../../../../kotlinx/coroutines/debug/internal/DebugProbesImpl$CoroutineOwner.d.ts'
import type { DebuggerInfo } from '../../../../kotlinx/coroutines/debug/internal/DebuggerInfo.d.ts'
import type { StackTraceFrame } from '../../../../kotlinx/coroutines/debug/internal/StackTraceFrame.d.ts'
export class DebugProbesImpl extends Object {
    static INSTANCE: DebugProbesImpl;
    // private createOwner<T extends unknown>(completion: Continuation<T>, frame: StackTraceFrame | null): Continuation<T>;
    dumpCoroutines(out: PrintStream): void;
    dumpCoroutinesInfo(): DebugCoroutineInfo[];
    dumpCoroutinesInfoAsJsonAndReferences(): Object[];
    // private dumpCoroutinesInfoImpl<R extends unknown>(create: (param0: DebugProbesImpl$CoroutineOwner<Object>, param1: CoroutineContext) => R): R[];
    // private dumpCoroutinesSynchronized(out: PrintStream): void;
    dumpDebuggerInfo(): DebuggerInfo[];
    enhanceStackTraceWithThreadDump(info: DebugCoroutineInfo, coroutineTrace: StackTraceElement[]): StackTraceElement[];
    enhanceStackTraceWithThreadDumpAsJson(info: DebugCoroutineInfo): string;
    // private enhanceStackTraceWithThreadDumpImpl(state: string, thread: Thread | null, coroutineTrace: StackTraceElement[]): StackTraceElement[];
    // private findContinuationStartIndex(indexOfResumeWith: number, actualTrace: StackTraceElement[], coroutineTrace: StackTraceElement[]): Pair<number, number>;
    // private findIndexOfFrame(frameIndex: number, actualTrace: StackTraceElement[], coroutineTrace: StackTraceElement[]): number;
    // private getDynamicAttach(): ((param0: boolean) => void) | null;
    hierarchyToString(job: Job): string;
    install(): void;
    // private printStackTrace(out: PrintStream, frames: StackTraceElement[]): void;
    // private probeCoroutineCompleted(owner: DebugProbesImpl$CoroutineOwner<Object>): void;
    probeCoroutineCreated<T extends unknown>(completion: Continuation<T>): Continuation<T>;
    probeCoroutineResumed(frame: Continuation<Object>): void;
    probeCoroutineSuspended(frame: Continuation<Object>): void;
    // private sanitizeStackTrace<T extends Throwable>(throwable: T): StackTraceElement[];
    // private startWeakRefCleanerThread(): void;
    // private stopWeakRefCleanerThread(): void;
    uninstall(): void;
    // private updateRunningState(frame: CoroutineStackFrame, state: string): void;
    // private updateState(frame: Continuation<Object>, state: string): void;
    // private updateState(owner: DebugProbesImpl$CoroutineOwner<Object>, frame: Continuation<Object>, state: string): void;
}