import type { FinalizableReferenceQueue$FinalizerLoader } from '../../../../com/google/common/base/FinalizableReferenceQueue$FinalizerLoader.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { URLClassLoader } from '../../../../java/net/URLClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FinalizableReferenceQueue$DecoupledLoader extends Object implements FinalizableReferenceQueue$FinalizerLoader {
    constructor()
    getBaseUrl(): URL;
    loadFinalizer(): Class<Object>;
    newLoader(base: URL): URLClassLoader;
}