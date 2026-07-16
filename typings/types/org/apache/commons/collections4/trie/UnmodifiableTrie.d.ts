import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnmodifiableTrie<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static unmodifiableTrie<K extends unknown, V extends unknown>(paramarg0: Map<K, V>): Map<K, V>;
}