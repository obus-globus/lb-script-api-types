import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectMap<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): Object2ObjectMap$Entry<K, V>;
    static ofEntries<K extends unknown, V extends unknown>(...paramarg0: Object2ObjectMap$Entry<K, V>[]): JavaMap<K, V>;
}