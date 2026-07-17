import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ObjectMap<V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<V extends unknown>(paramarg0: number, paramarg1: V): Int2ObjectMap$Entry<V>;
    static ofEntries<V extends unknown>(...paramarg0: Int2ObjectMap$Entry<V>[]): JavaMap<any, any>;
}