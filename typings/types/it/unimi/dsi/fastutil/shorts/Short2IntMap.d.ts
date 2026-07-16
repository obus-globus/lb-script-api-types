import type { Short2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntMap$Entry.d.ts'
export class Short2IntMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Short2IntMap$Entry;
    static ofEntries(...paramarg0: Short2IntMap$Entry[]): { [key: string]: any };
}