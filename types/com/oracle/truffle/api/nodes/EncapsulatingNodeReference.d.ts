import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EncapsulatingNodeReference extends Object {
    static getCurrent(): EncapsulatingNodeReference;
    constructor(t: Thread)
    // private reference: Node;
    // private thread: WeakReference<Thread>;
    get(): Node;
    set(node: Node): Node;
}