import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteMap$Entry.d.ts'
export class Short2ByteMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Short2ByteMap$Entry;
    static ofEntries(...paramarg0: Short2ByteMap$Entry[]): JavaMap<any, any>;
}