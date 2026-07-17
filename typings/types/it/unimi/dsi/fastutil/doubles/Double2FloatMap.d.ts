import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
export class Double2FloatMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Double2FloatMap$Entry;
    static ofEntries(...paramarg0: Double2FloatMap$Entry[]): JavaMap<any, any>;
}