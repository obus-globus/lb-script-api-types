import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceLists extends Object {
    static EMPTY_LIST: (Object | null)[];
    static emptyList<K extends unknown>(): K[];
    static shuffle<K extends unknown>(paramarg0: K[], paramarg1: Random): K[];
    static singleton<K extends unknown>(paramarg0: K): K[];
    static synchronize<K extends unknown>(paramarg0: K[]): K[];
    static synchronize<K extends unknown>(paramarg0: K[], paramarg1: Object): K[];
    static unmodifiable<K extends unknown>(paramarg0: K[]): K[];
    private constructor()
}