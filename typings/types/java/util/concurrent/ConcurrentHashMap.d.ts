import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentHashMap<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static newKeySet<K extends unknown>(): (Object | null)[];
    static newKeySet<K extends unknown>(paramarg0: number): (Object | null)[];
}