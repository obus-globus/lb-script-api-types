import type { Char2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortMap$Entry.d.ts'
export class Char2ShortMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: string, paramarg1: number): Char2ShortMap$Entry;
    static ofEntries(...paramarg0: Char2ShortMap$Entry[]): { [key: string]: any };
}