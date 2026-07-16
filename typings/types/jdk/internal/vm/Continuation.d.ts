import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { StackWalker } from '../../../java/lang/StackWalker.d.ts'
import type { StackWalker$Option } from '../../../java/lang/StackWalker$Option.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Continuation$Pinned } from '../../../jdk/internal/vm/Continuation$Pinned.d.ts'
import type { Continuation$PreemptStatus } from '../../../jdk/internal/vm/Continuation$PreemptStatus.d.ts'
import type { ContinuationScope } from '../../../jdk/internal/vm/ContinuationScope.d.ts'
import type { StackChunk } from '../../../jdk/internal/vm/StackChunk.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Continuation extends Object {
    static getCurrentContinuation(paramarg0: ContinuationScope): Continuation;
    static isPinned(paramarg0: ContinuationScope): boolean;
    static pin(): void;
    static unpin(): void;
    static wrapWalk<R extends unknown>(paramarg0: Continuation, paramarg1: ContinuationScope, paramarg2: () => R): R;
    static yield(paramarg0: ContinuationScope): boolean;
    constructor(arg0: ContinuationScope, arg1: () => void)
    // private child: Continuation;
    readonly done: boolean;
    // private mounted: boolean;
    readonly parent: Continuation;
    readonly preempted: boolean;
    readonly scope: ContinuationScope;
    // private scopedValueCache: Object[];
    // private tail: StackChunk;
    // private target: () => void;
    // private yieldInfo: Object;
    // private compareAndSetMounted(arg0: boolean, arg1: boolean): boolean;
    // private dump(): void;
    // private enter0(): void;
    // private fence(): boolean;
    // private finish(): void;
    getParent(): Continuation;
    getScope(): ContinuationScope;
    getStackTrace(): StackTraceElement[];
    // private id(): string;
    // private innermost(): Continuation;
    isDone(): boolean;
    // private isEmpty(): boolean;
    isPreempted(): boolean;
    // private isStarted(): boolean;
    // private mount(): void;
    onContinue(): void;
    onPinned(arg0: Continuation$Pinned): void;
    // private onPinned0(arg0: number): void;
    // private postYieldCleanup(): void;
    run(): void;
    // private setMounted(arg0: boolean): void;
    stackWalker(): StackWalker;
    stackWalker(arg0: StackWalker$Option[]): StackWalker;
    stackWalker(arg0: StackWalker$Option[], arg1: ContinuationScope): StackWalker;
    toString(): string;
    tryPreempt(arg0: Thread): Continuation$PreemptStatus;
    // private unmount(): void;
    // private yield0(arg0: ContinuationScope, arg1: Continuation): boolean;
}