import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export interface ChildHandle extends Object, DisposableHandle{
    readonly parent: Job | null;
    childCancelled(cause: Throwable): boolean;
    dispose(): void;
}