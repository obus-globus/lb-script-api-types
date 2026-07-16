import type { Long2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteMap$Entry.d.ts'
export class Long2ByteMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Long2ByteMap$Entry;
    static ofEntries(...paramarg0: Long2ByteMap$Entry[]): { [key: string]: any };
}