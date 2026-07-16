import type { Char2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharMap$Entry.d.ts'
export class Char2CharMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: string, paramarg1: string): Char2CharMap$Entry;
    static ofEntries(...paramarg0: Char2CharMap$Entry[]): { [key: string]: any };
}