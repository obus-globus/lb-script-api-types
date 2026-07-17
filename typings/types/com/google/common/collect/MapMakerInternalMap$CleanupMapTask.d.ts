import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$CleanupMapTask extends Object implements Runnable {
    constructor(map: JavaMap<Object | null, Object | null>)
    // private mapReference: WeakReference<JavaMap<Object, Object>>;
    run(): void;
}