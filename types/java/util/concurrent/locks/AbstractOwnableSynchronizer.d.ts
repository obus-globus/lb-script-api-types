import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractOwnableSynchronizer extends Object implements Serializable {
    constructor()
    // private exclusiveOwnerThread: Thread;
    getExclusiveOwnerThread(): Thread;
    setExclusiveOwnerThread(arg0: Thread): void;
}