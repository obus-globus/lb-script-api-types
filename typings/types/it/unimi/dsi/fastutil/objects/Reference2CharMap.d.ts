import type { Reference2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2CharMap<K extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<K extends unknown>(paramarg0: K, paramarg1: string): Reference2CharMap$Entry<K>;
    static ofEntries<K extends unknown>(...paramarg0: Reference2CharMap$Entry<K>[]): { [key: string]: any };
}