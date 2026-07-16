import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnorderedTrieMap<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static empty<K extends unknown, V extends unknown>(): Map<K, V>;
}