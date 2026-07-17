import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongMap$Entry.d.ts'
export class Double2LongMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Double2LongMap$Entry;
    static ofEntries(...paramarg0: Double2LongMap$Entry[]): JavaMap<any, any>;
}