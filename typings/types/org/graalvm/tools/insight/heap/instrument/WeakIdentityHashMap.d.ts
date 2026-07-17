import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { ReferenceQueue } from '../../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { WeakIdentityHashMap$ObjectReference } from '../../../../../../org/graalvm/tools/insight/heap/instrument/WeakIdentityHashMap$ObjectReference.d.ts'
export class WeakIdentityHashMap<K extends unknown, V extends unknown> extends Object {
    constructor()
    // private map: JavaMap<WeakIdentityHashMap$ObjectReference, V>;
    // private queue: ReferenceQueue<Object>;
    get(key: Object): V;
    put(key: K, value: V): V;
    // private removeCollectedEntries(): void;
}