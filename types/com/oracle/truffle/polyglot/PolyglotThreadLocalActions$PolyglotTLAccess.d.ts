import type { ThreadLocalAction$Access } from '../../../../com/oracle/truffle/api/ThreadLocalAction$Access.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
export class PolyglotThreadLocalActions$PolyglotTLAccess extends ThreadLocalAction$Access {
    constructor(thread: Thread, location: Node)
    // private invalid: boolean;
    readonly location: Node;
    readonly thread: Thread;
    // private checkInvalid(): void;
    getLocation(): Node;
    getThread(): Thread;
}