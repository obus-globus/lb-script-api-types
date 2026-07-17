import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharMap<K extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<K extends unknown>(paramarg0: K, paramarg1: string): Object2CharMap$Entry<K>;
    static ofEntries<K extends unknown>(...paramarg0: Object2CharMap$Entry<K>[]): JavaMap<any, any>;
}