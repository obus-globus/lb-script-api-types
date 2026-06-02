import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LockFreePool$Node } from '../../../org/graalvm/collections/LockFreePool$Node.d.ts'
export class LockFreePool<T extends Object | number | string | boolean> extends Object {
    constructor()
    // private head: AtomicReference<LockFreePool$Node<T>>;
    add(element: T): void;
    get(): T;
}