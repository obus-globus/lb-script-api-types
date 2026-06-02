import type { ThreadLocalHandshake } from '../../../../../com/oracle/truffle/api/impl/ThreadLocalHandshake.d.ts'
import type { ThreadLocalHandshake$TruffleSafepointImpl } from '../../../../../com/oracle/truffle/api/impl/ThreadLocalHandshake$TruffleSafepointImpl.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
export class DefaultThreadLocalHandshake extends ThreadLocalHandshake {
    private constructor()
    clearFastPending(): void;
    ensureThreadInitialized(): void;
    getCurrent(): ThreadLocalHandshake$TruffleSafepointImpl;
    poll(enclosingNode: Node): void;
    setFastPending(t: Thread): void;
}