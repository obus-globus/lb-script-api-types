import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MemoryURLStreamRecord extends Object {
    constructor()
    data: number[];
    url: WeakReference<URL>;
}