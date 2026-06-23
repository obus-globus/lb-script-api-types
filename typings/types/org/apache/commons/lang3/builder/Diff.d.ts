import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { Pair } from '../../../../../org/apache/commons/lang3/tuple/Pair.d.ts'
export abstract class Diff<T extends unknown> extends Pair<T, T> {
    static EMPTY_ARRAY: Object | null;
    static emptyArray(): Object | null;
    static of(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    static of(paramarg0: Map$Entry<Object, Object>): Pair<Object, Object>;
    static ofNonNull(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    constructor(arg0: string)
    constructor(arg0: string, arg1: Type)
    readonly fieldName: string;
    readonly type: Type;
    getFieldName(): string;
    getType(): Type;
    setValue(arg0: T): T;
    toString(): string;
    toString(arg0: string): string;
}