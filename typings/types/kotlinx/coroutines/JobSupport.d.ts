import type { CancellationException } from '../../java/util/concurrent/CancellationException.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { AtomicRef } from '../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { ChildHandle } from '../../kotlinx/coroutines/ChildHandle.d.ts'
import type { ChildHandleNode } from '../../kotlinx/coroutines/ChildHandleNode.d.ts'
import type { ChildJob } from '../../kotlinx/coroutines/ChildJob.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Empty } from '../../kotlinx/coroutines/Empty.d.ts'
import type { Incomplete } from '../../kotlinx/coroutines/Incomplete.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
import type { JobCancellationException } from '../../kotlinx/coroutines/JobCancellationException.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
import type { JobSupport$Finishing } from '../../kotlinx/coroutines/JobSupport$Finishing.d.ts'
import type { NodeList } from '../../kotlinx/coroutines/NodeList.d.ts'
import type { ParentJob } from '../../kotlinx/coroutines/ParentJob.d.ts'
import type { SelectInstance } from '../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export class JobSupport extends Object implements ChildJob, Job, ParentJob {
    static Key: Job$Key;
    constructor(active: boolean)
    // private addSuppressedExceptions(rootCause: Throwable, exceptions: Throwable[]): void;
    protected afterCompletion(state: Object | null): void;
    attachChild(child: ChildJob): ChildHandle;
    protected awaitInternal(): Object | null;
    // private awaitSuspend(): Object | null;
    cancel(): void;
    cancel(cause: Throwable | null): boolean;
    cancel(cause: CancellationException | null): void;
    cancelCoroutine(cause: Throwable | null): boolean;
    cancelImpl(cause: Object | null): boolean;
    cancelInternal(cause: Throwable): void;
    // private cancelMakeCompleting(cause: Object | null): Object | null;
    // private cancelParent(cause: Throwable): boolean;
    protected cancellationExceptionMessage(): string;
    childCancelled(cause: Throwable): boolean;
    // private completeStateFinalization(state: Incomplete, update: Object | null): void;
    // private continueCompleting(state: JobSupport$Finishing, lastChild: ChildHandleNode, proposedUpdate: Object | null): void;
    // private createCauseException(cause: Object | null): Throwable;
    defaultCancellationException(message: string | null, cause: Throwable | null): JobCancellationException;
    // private finalizeFinishingState(state: JobSupport$Finishing, proposedUpdate: Object | null): Object | null;
    getCancellationException(): CancellationException;
    getChildJobCancellationCause(): CancellationException;
    getCompletedInternal(): Object | null;
    getCompletionExceptionOrNull(): Throwable | null;
    // private getFinalRootCause(state: JobSupport$Finishing, exceptions: Throwable[]): Throwable | null;
    // private getOrPromoteCancellingList(state: Incomplete): NodeList | null;
    protected handleJobException(exception: Throwable): boolean;
    handleOnCompletionException(exception: Throwable): void;
    protected initParentJob(parent: Job | null): void;
    invokeOnCompletion(onCancelling: boolean, invokeImmediately: boolean, handler: (param0: Throwable | null) => void): DisposableHandle;
    invokeOnCompletion(handler: (param0: Throwable | null) => void): DisposableHandle;
    invokeOnCompletionInternal(invokeImmediately: boolean, node: JobNode): DisposableHandle;
    join(): void;
    // private joinInternal(): boolean;
    // private joinSuspend(): void;
    // private loopOnState(block: (param0: Object | null) => void): void;
    // private makeCancelling(cause: Object | null): Object | null;
    makeCompleting(proposedUpdate: Object | null): boolean;
    makeCompletingOnce(proposedUpdate: Object | null): Object | null;
    nameString(): string;
    // private notifyCancelling(list: NodeList, cause: Throwable): void;
    // private notifyHandlers(list: NodeList, cause: Throwable | null, predicate: (param0: JobNode) => boolean): void;
    // private onAwaitInternalProcessResFunc(ignoredParam: Object | null, result: Object | null): Object | null;
    // private onAwaitInternalRegFunc(select: SelectInstance<Object>, ignoredParam: Object | null): void;
    protected onCancelling(cause: Throwable | null): void;
    protected onCompletionInternal(state: Object | null): void;
    protected onStart(): void;
    parentCancelled(parentJob: ParentJob): void;
    plus(other: Job): Job;
    // private promoteEmptyToNodeList(state: Empty): void;
    // private promoteSingleToNodeList(state: JobNode): void;
    // private registerSelectForOnJoin(select: SelectInstance<Object>, ignoredParam: Object | null): void;
    removeNode(node: JobNode): void;
    start(): boolean;
    // private startInternal(state: Object | null): number;
    // private stateString(state: Object | null): string;
    toDebugString(): string;
    toString(): string;
    // private tryFinalizeSimpleState(state: Incomplete, update: Object | null): boolean;
    // private tryMakeCancelling(state: Incomplete, rootCause: Throwable): boolean;
    // private tryMakeCompleting(state: Object | null, proposedUpdate: Object | null): Object | null;
    // private tryMakeCompletingSlowPath(state: Incomplete, proposedUpdate: Object | null): Object | null;
    // private tryPutNodeIntoList(node: JobNode, tryAdd: (param0: Incomplete, param1: NodeList) => boolean): boolean;
    // private tryWaitForChild(state: JobSupport$Finishing, child: ChildHandleNode, proposedUpdate: Object | null): boolean;
}