import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReferenceCollections extends Object {
    static asCollection<K extends unknown>(paramarg0: K[]): K[];
    static synchronize<K extends unknown>(paramarg0: K[]): K[];
    static synchronize<K extends unknown>(paramarg0: K[], paramarg1: Object): K[];
    static unmodifiable<K extends unknown>(paramarg0: K[]): K[];
    private constructor()
}