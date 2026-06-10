import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollectionExtensionsKt extends Object {
    static matchesAll(iterable: (param0: Object | null) => boolean[], t: Object | null): boolean;
    static matchesAny(iterable: (param0: Object | null) => boolean[], t: Object | null): boolean;
    static toOrderedSet(collection: (Object | null)[]): (Object | null)[];
    static unmodifiable(paramarg0: Object | null): (Object | null)[];
}