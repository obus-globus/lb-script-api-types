import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Incomplete } from '../../kotlinx/coroutines/Incomplete.d.ts'
import type { JobSupport } from '../../kotlinx/coroutines/JobSupport.d.ts'
import type { NodeList } from '../../kotlinx/coroutines/NodeList.d.ts'
import type { LockFreeLinkedListNode } from '../../kotlinx/coroutines/internal/LockFreeLinkedListNode.d.ts'
export abstract class JobNode extends LockFreeLinkedListNode implements DisposableHandle, Incomplete {
    constructor()
    /*not mapped: */ isActive(): boolean;
    job: JobSupport;
    readonly list: NodeList | null;
    readonly onCancelling: boolean;
    dispose(): void;
    invoke(cause: Throwable | null): void;
    toString(): string;
}