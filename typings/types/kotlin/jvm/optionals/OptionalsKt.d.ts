import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
export class OptionalsKt extends Object {
    static asSequence(paramarg0: Optional<Object>): Sequence<Object>;
    static getOrDefault(paramarg0: Optional<Object>, paramarg1: Object | null): Object | null;
    static getOrElse(paramarg0: Optional<Object>, paramarg1: () => Object | null): Object | null;
    static getOrNull(paramarg0: Optional<Object>): Object | null;
    static toCollection(paramarg0: Optional<Object>, paramarg1: Object | null): Object | null;
    static toList(paramarg0: Optional<Object>): (Object | null)[];
    static toSet(paramarg0: Optional<Object>): (Object | null)[];
}