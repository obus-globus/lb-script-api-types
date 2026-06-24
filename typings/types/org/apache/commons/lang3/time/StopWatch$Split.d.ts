import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { ImmutablePair } from '../../../../../org/apache/commons/lang3/tuple/ImmutablePair.d.ts'
import type { Pair } from '../../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export class StopWatch$Split extends ImmutablePair<string, Duration> {
    static EMPTY_ARRAY: Object | null;
    static EMPTY_ARRAY: Object | null;
    static emptyArray(): Object | null;
    static emptyArray(): Object | null;
    static left(paramarg0: Object | null): Pair<Object, Object>;
    static nullPair(): ImmutablePair<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): ImmutablePair<Object, Object>;
    static of(paramarg0: Map$Entry<Object, Object>): ImmutablePair<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    static of(paramarg0: Map$Entry<Object, Object>): Pair<Object, Object>;
    static ofNonNull(paramarg0: Object | null, paramarg1: Object | null): ImmutablePair<Object, Object>;
    static ofNonNull(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    static right(paramarg0: Object | null): Pair<Object, Object>;
    constructor(arg0: string, arg1: Duration)
    getDuration(): Duration;
    getLabel(): string;
    toString(): string;
    toString(arg0: string): string;
}