import type { Reference2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2BooleanMap<K extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<K extends unknown>(paramarg0: K, paramarg1: boolean): Reference2BooleanMap$Entry<K>;
    static ofEntries<K extends unknown>(...paramarg0: Reference2BooleanMap$Entry<K>[]): { [key: string]: any };
}