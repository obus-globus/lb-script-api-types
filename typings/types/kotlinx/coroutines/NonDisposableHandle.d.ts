import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { ChildHandle } from '../../kotlinx/coroutines/ChildHandle.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class NonDisposableHandle extends Object implements ChildHandle, DisposableHandle {
    static INSTANCE: NonDisposableHandle;
    readonly parent: Job | null;
    childCancelled(cause: Throwable): boolean;
    dispose(): void;
    toString(): string;
}