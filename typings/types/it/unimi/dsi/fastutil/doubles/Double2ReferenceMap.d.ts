import type { Double2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ReferenceMap<V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<V extends unknown>(paramarg0: number, paramarg1: V): Double2ReferenceMap$Entry<V>;
    static ofEntries<V extends unknown>(...paramarg0: Double2ReferenceMap$Entry<V>[]): { [key: string]: any };
}