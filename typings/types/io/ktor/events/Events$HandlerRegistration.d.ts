import type { LockFreeLinkedListNode } from '../../../io/ktor/util/internal/LockFreeLinkedListNode.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DisposableHandle } from '../../../kotlinx/coroutines/DisposableHandle.d.ts'
export class Events$HandlerRegistration extends LockFreeLinkedListNode implements DisposableHandle {
    constructor(handler: (param0: Object | null) => void)
    readonly handler: (param0: Object | null) => void;
    dispose(): void;
}