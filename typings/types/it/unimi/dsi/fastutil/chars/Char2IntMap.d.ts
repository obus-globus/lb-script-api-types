import type { Char2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntMap$Entry.d.ts'
export class Char2IntMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: string, paramarg1: number): Char2IntMap$Entry;
    static ofEntries(...paramarg0: Char2IntMap$Entry[]): { [key: string]: any };
}