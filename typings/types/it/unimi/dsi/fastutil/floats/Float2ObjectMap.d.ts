import type { Float2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectMap<V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static entry<V extends unknown>(paramarg0: number, paramarg1: V): Float2ObjectMap$Entry<V>;
    static ofEntries<V extends unknown>(...paramarg0: Float2ObjectMap$Entry<V>[]): { [key: string]: any };
}