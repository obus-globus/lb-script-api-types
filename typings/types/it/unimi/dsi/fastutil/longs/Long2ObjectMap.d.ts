import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ObjectMap<V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<V extends unknown>(paramarg0: number, paramarg1: V): Long2ObjectMap$Entry<V>;
    static ofEntries<V extends unknown>(...paramarg0: Long2ObjectMap$Entry<V>[]): JavaMap<any, any>;
}