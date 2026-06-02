import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { ChildHandleNode } from '../../kotlinx/coroutines/ChildHandleNode.d.ts'
import type { JobNode } from '../../kotlinx/coroutines/JobNode.d.ts'
import type { JobSupport } from '../../kotlinx/coroutines/JobSupport.d.ts'
import type { JobSupport$Finishing } from '../../kotlinx/coroutines/JobSupport$Finishing.d.ts'
export class JobSupport$ChildCompletion extends JobNode {
    constructor(parent: JobSupport, state: JobSupport$Finishing, child: ChildHandleNode, proposedUpdate: Object | null)
    // private child: ChildHandleNode;
    readonly onCancelling: boolean;
    // private parent: JobSupport;
    // private proposedUpdate: Object | null;
    // private state: JobSupport$Finishing;
    invoke(cause: Throwable | null): void;
}