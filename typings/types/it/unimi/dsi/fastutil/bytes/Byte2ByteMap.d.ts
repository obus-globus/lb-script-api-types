import type { Byte2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteMap$Entry.d.ts'
export class Byte2ByteMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: number): Byte2ByteMap$Entry;
    static ofEntries(...paramarg0: Byte2ByteMap$Entry[]): { [key: string]: any };
}