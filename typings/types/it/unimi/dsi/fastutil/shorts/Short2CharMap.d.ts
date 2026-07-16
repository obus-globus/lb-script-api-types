import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
export class Short2CharMap {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry(paramarg0: number, paramarg1: string): Short2CharMap$Entry;
    static ofEntries(...paramarg0: Short2CharMap$Entry[]): { [key: string]: any };
}