import type { ReferenceQueue } from '../../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { WeakIdentityHashMap$ObjectReference } from '../../../../../../org/graalvm/tools/insight/heap/instrument/WeakIdentityHashMap$ObjectReference.d.ts'
export class WeakIdentityHashMap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    constructor()
    // private map: Map<WeakIdentityHashMap$ObjectReference, V>;
    // private queue: ReferenceQueue<Object>;
    get(key: Object): V;
    put(key: K, value: V): V;
    // private removeCollectedEntries(): void;
}