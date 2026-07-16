import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class InternCache {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static instance: { [key: string]: any };
    static newKeySet<K extends unknown>(): (Object | null)[];
    static newKeySet<K extends unknown>(paramarg0: number): (Object | null)[];
}