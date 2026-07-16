import type { Char2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongMap$Entry.d.ts'
export class Char2LongMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: string, paramarg1: number): Char2LongMap$Entry;
    static ofEntries(...paramarg0: Char2LongMap$Entry[]): { [key: string]: any };
}