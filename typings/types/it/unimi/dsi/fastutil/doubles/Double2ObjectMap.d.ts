import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ObjectMap<V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<V extends unknown>(paramarg0: number, paramarg1: V): Double2ObjectMap$Entry<V>;
    static ofEntries<V extends unknown>(...paramarg0: Double2ObjectMap$Entry<V>[]): JavaMap<any, any>;
}