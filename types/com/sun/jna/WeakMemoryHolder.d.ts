import type { Memory } from '../../../com/sun/jna/Memory.d.ts'
import type { Reference } from '../../../java/lang/ref/Reference.d.ts'
import type { ReferenceQueue } from '../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WeakMemoryHolder extends Object {
    constructor()
    // private backingMap: Map<Reference<Object>, Memory>;
    // private referenceQueue: ReferenceQueue<Object>;
    clean(): void;
    put(arg0: Object, arg1: Memory): void;
}