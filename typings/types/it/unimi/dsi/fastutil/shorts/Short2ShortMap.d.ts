import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortMap$Entry.d.ts'
export class Short2ShortMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Short2ShortMap$Entry;
    static ofEntries(...paramarg0: Short2ShortMap$Entry[]): JavaMap<any, any>;
}