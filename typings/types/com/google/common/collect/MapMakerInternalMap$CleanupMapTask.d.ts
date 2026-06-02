import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$CleanupMapTask extends Object implements Runnable {
    constructor(map: Map<Object, Object>)
    // private mapReference: WeakReference<Map<Object, Object>>;
    run(): void;
}