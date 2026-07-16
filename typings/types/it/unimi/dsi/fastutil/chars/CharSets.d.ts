import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharSets extends Object {
    static EMPTY_SET: (Object | null)[];
    static emptySet(): (Object | null)[];
    static from(paramarg0: string): (Object | null)[];
    static fromTo(paramarg0: string, paramarg1: string): (Object | null)[];
    static singleton(paramarg0: string): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[]): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[], paramarg1: Object): (Object | null)[];
    static to(paramarg0: string): (Object | null)[];
    static unmodifiable(paramarg0: (Object | null)[]): (Object | null)[];
    private constructor()
}